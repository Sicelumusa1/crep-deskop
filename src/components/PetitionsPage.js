import React, { useState, useEffect } from 'react';
import { publicAxiosInstance } from '../axiosConfig';
import PetitionModal from './PetitionModal';
import '../styles/PetitionsPage.css';

const PetitionsPage = () => {
  const [provinces, setProvinces] = useState([]);
  const [selectedPetition, setSelectedPetition] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    publicAxiosInstance.get('crep/provinces/')
      .then(response => setProvinces(response.data.length))
      .catch(error => console.error('Erro fetching petitions:', error));
  }, []);

  const toggleModal = (petition) => {
    setSelectedPetition(petition);
    setShowModal(!showModal);
  }

  return (
    <div className='petition-page'>
      {provinces.map(province => (
        <Province 
          key={province.id}
          province={province.name}
          toggleModal={toggleModal}
        />
      ))}
      {showModal && (
        <PetitionModal 
          petition={selectedPetition}
          closeModal={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

const Province = ({ province, toggleModal }) => {
  const [municipalities, setMunicipalities] = useState([]);
  const [totalPetitions, setTotalPetitions] = useState(0);

  useEffect(() => {
    // Fetch municipalities for the selected province
    publicAxiosInstance.get(`crep/provinces/${province.id}/municipalities/`)
    .then((response) => {
      setMunicipalities(response.data);
      const total = response.data.reduce((sum, municipality) => sum + municipality.petition_count, 0);
      setTotalPetitions(total);
  })
  .catch((error) => console.error('Error fetching municipalities:', error));
  }, [province.id]);

  return (
    <div className='province'>
      <h3>{province.name} ({totalPetitions} Petitions)</h3>
      {municipalities.map(municipality => (
        <Municipality 
          key={municipality.id}
          municipality={municipality}
          toggleModal={toggleModal}
        />
      ))}
    </div>
  );
};

const Municipality = ({municipality, toggleModal}) => {
  const [wards, setWards] = useState([]);
  const [showWards, setShowWards] = useState(false);

  useEffect(() => {
    // Fetch wards for the selected municipality
    publicAxiosInstance.get(`crep/municipalities/${municipality.id}/wards/`)
      .then((response) => {
        const wardsWithPetitions = response.data.filter(ward => ward.petition_count > 0);
        setWards(wardsWithPetitions);
      })
      .catch((error) => console.error('Error fetching wards:', error));
  }, [municipality.id]);

  return (
    <div className='municipality'>
      <h4 onClick={() => setShowWards(!showWards)}>
        {municipality.name} ({municipality.petition_count} Petitions)
      </h4>
      {showWards && wards.length > 0 && (
        <ul>
          {wards.map(ward => (
            <Ward 
              key={ward.id}
              ward={ward}
              toggleModal={toggleModal}
            />
          ))}
        </ul>
      )}
      {showWards && wards.length === 0 && (
        <p>There is no petition in this municipality. Residents still have confidence in their leadership.</p>
      )}
    </div>
  );
};

const Ward = ({ ward, toggleModal }) => {
  const [petition, setPetition] = useState(null);

  useEffect(() => {
    publicAxiosInstance.get(`crep/wards/${ward.id}/petitions/`)
      .then(response => setPetition(response.data[0]))
      .catch(error => console.error('Error fetching petition:', error));
  }, [ward.id]);

  return (
    <li className='ward'>
      <h5 onClick={() => toggleModal(petition)}>{ward.ward_number}</h5>
    </li>
  );
};

export default PetitionsPage;