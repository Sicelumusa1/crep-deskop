import { useState } from "react";
import MyProvince from "../components/MyProvince";
import MyMunicipality from "../components/MyMunicipality";
import MyWard from "../components/MyWard";
import CouncilorInfo from "../components/Councilor";
import '../styles/MyCouncilor.css';
import CouncilorTable from "../components/CouncilorTable";
import useLocationData from '../hooks/useLocationData';


const MyCouncilor = () => {
  const {
    provinces,
    municipalities,
    provinceName,
    municipalityName,
    wards,
    councilor,
    fetchMunicipalities,
    fetchWards,
    fetchProvinceName,
    fetchMunicipalityName,
    fetchCouncilorDetails
  } = useLocationData();
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedMunicipality, setSelectedMunicipality] = useState('');
  const [selectedWard, setSelectedWard] = useState('');


  // Handle province selection
  const handleProvinceChange = async (e) => {
    const selectedProvinceId = e.target.value;
    setSelectedProvince(selectedProvinceId);
    setSelectedMunicipality('');
    setSelectedWard('');
  
    // Fetch municipalities for the selected province and Province Name
    await fetchMunicipalities(selectedProvinceId);
    await fetchProvinceName(selectedProvinceId);
  };

  // Handle municipality selection
  const handleMunicipalityChange = async (e) => {
    const selectedMunicipalityId = e.target.value;
    setSelectedMunicipality(selectedMunicipalityId);
    setSelectedWard('');

    // Fetch wards for the selected municipality and Municipality Name
    await fetchWards(selectedMunicipalityId)
    await fetchMunicipalityName(selectedMunicipalityId)
  };

  // Handle ward selestion
  const handleWardChange = async (e) => {
    const selectedWardNumber = e.target.value;
    setSelectedWard(selectedWardNumber);

    // Fetch councilor for the selected ward
    await fetchCouncilorDetails(selectedWardNumber);
  }  
  
  return (
    <div className='councilor-info'>
        <div className="dropdowns">
          <MyProvince
            provinces={provinces}
            selectedProvince={selectedProvince}
            handleProvinceChange={handleProvinceChange}
          />

          <MyMunicipality
            municipalities={municipalities}
            selectedMunicipality={selectedMunicipality}
            handleMunicipalityChange={handleMunicipalityChange}
          />

          <MyWard
            wards={wards}
            selectedWard={selectedWard}
            handleWardChange={handleWardChange}
          />
        </div>

        <div className="province-info">
          {!selectedProvince && !selectedMunicipality && ( 
            <div className='province-list'>
              <h3>List of Provinces</h3>
            <ul>
              {provinces.map((province) => { 
                  return (
                    <li key={province.id}>
                      {province.name}
                    </li>
                  );
                })}
              </ul> 
            </div> 
          )} 
        </div>

        {/* List of municipalities with number of wards */}
        <div className="municipality-info">
          {selectedProvince && !selectedMunicipality &&( 
          <div className='municipality-list'>
            <h3>Municipalities Under This Province</h3>
            <ul>
              {municipalities.map((municipality) => {
                return (
                  <li key={municipality.id}>
                    {municipality.name}
                  </li>
                );
              })}
            </ul>
          </div> 
          )}
        </div>
	  
        <div className="detail-info">

          {(selectedProvince && selectedMunicipality && !selectedWard) ? (
            // Display all councilors of the Municipality
            <CouncilorTable selectedMunicipality={selectedMunicipality} />
            
            ) : (
              // Display details of the selected ward/councilor
              <CouncilorInfo 
                selectedCouncilor={councilor} 
                selectedMunicipalityName={municipalityName} 
                selectedProvinceName={provinceName} 
              />
            )}
        </div>
    </div>
  );
};

export default MyCouncilor;
