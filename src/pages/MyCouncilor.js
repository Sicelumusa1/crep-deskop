import React, { useState, useEffect } from "react";
import axios from 'axios';
import MyProvince from "../components/MyProvince";
import MyMunicipality from "../components/MyMunicipality";
import MyWard from "../components/MyWard";
import CouncilorInfo from "../components/Councilor";
import MunicipalityList from "../components/MunicipalityList";
import '../App.css';
import CouncilorTable from "../components/CouncilorTable";


const MyCouncilor = () => {
  const [provinces, setProvinces] = useState([]);
  const [municipalities, setMunicipalities] = useState([]);
  const [wards, setWards] = useState([]);
  const [councilors, setCouncilors] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedMunicipality, setSelectedMunicipality] = useState('');
  const [selectedWard, setSelectedWard] = useState('');
  const [selectedCouncilor, setSelectedCouncilor] = useState(null);
  const [selectedProvinceName, setSelectedProvinceName] = useState('');
  const [selectedMunicipalityName, setSelectedMunicipalityName] = useState('');


  useEffect(() => {
    // Fetch provinces
    axios.get('http://127.0.0.1:8000/crep/provinces/')
    .then((response) => setProvinces(response.data))
    .catch((error) => console.error('Error fetching provinces:', error));
  }, []);

    // Handle province selestion
    const handleProvinceChange = (e) => {
      const selectedProvinceId = e.target.value;
      setSelectedProvince(selectedProvinceId);
      setSelectedMunicipality('');
      setSelectedWard('');
      setSelectedCouncilor(null);
  
      // Fetch municipalities for the selected province
      axios.get(`http://127.0.0.1:8000/crep/provinces/${selectedProvinceId}/municipalities/`)
        .then((response) => setMunicipalities(response.data))
        .catch((error) => console.error('Error fetching municipalities:', error));

        // Fetch Province Name
        axios.get(`http://127.0.0.1:8000/crep/provinces/${selectedProvinceId}`)
          .then((response) => setSelectedProvinceName(response.data.name))
          .catch((error) => console.error('Error fetching province details'));
    };

    // Handle municipality selection
  const handleMunicipalityChange = (e) => {
    const selectedMunicipalityId = e.target.value;
    setSelectedMunicipality(selectedMunicipalityId);
    setSelectedWard('');
    setSelectedCouncilor(null);

    // Fetch wards for the selected municipality
    axios.get(`http://127.0.0.1:8000/crep/municipalities/${selectedMunicipalityId}/wards/`)
      .then((response) => setWards(response.data))
      .catch((error) => console.error('Error fetching wards:', error));

    // Fetch Municipality Name
    axios.get(`http://127.0.0.1:8000/crep/municipalities/${selectedMunicipalityId}`)
          .then((response) => setSelectedMunicipalityName(response.data.name))
          .catch((error) => console.error('Error fetching Municipality details'));
  };

  // Handle ward selestion
  const handleWardChange = (e) => {
    const selectedWardNumber = e.target.value;
    setSelectedWard(selectedWardNumber);
    setSelectedCouncilor(null);

    // Fetch councilor for the selected ward
      axios
        .get(`http://127.0.0.1:8000/crep/wards/${selectedWardNumber}/councilors/`)
        .then((response) => {
          setSelectedCouncilor(response.data)
        })
        .catch((error) => {
            console.error('Error fetching councilor details:', error)
        });
  }

  // const handleWardChange = (e) => {
  //   const selectedWardNumber = e.target.value;
  //   setSelectedWard(selectedWardNumber);
  //   setSelectedCouncilor(null);
  
  //   // Fetch councilor for the selected ward
  //   axios
  //     .get(`http://127.0.0.1:8000/crep/wards/${selectedWardNumber}/councilors/`)
  //     .then((response) => {
  //       console.log('Councilor data:', response.data); // Log the response data
  //       setSelectedCouncilor(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching councilor details:', error);
  //     });
  // };
  
  
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
        {/* {selectedProvince && !selectedMunicipality && (<MunicipalityList {...{ municipalities, wards }} />)} */}
        {/* {selectedMunicipality && (<CouncilorTable {...CouncilorInfo(councilors)} />)} */}
        {/* <div className="detail-info">
          {selectedCouncilor && <CouncilorInfo councilor={selectedCouncilor} selectedMunicipalityName={selectedMunicipalityName} selectedProvinceName={selectedProvinceName} />}
        </div> */}

        <div className="detail-info">

          {(selectedProvince && selectedMunicipality && !selectedWard) ? (
            
            // Display all councilors of the Municipality
            <CouncilorTable selectedMunicipality={selectedMunicipality} />
            
            ) : (
              // Display details of the selected ward/councilor
              <CouncilorInfo 
                councilor={selectedCouncilor} 
                selectedMunicipalityName={selectedMunicipalityName} 
                selectedProvinceName={selectedProvinceName} 
              />
            )}

        </div>

        


	   

	  {/* // Municipality dropdown */}
    {/* //     <select onChange={handleMunicipalityChange} value={selectedMunicipality} disabled={!selectedProvince}>
    //       <option value="">Select a municipality</option>
    //       {municipalities.map((municipality) => ( */}
    {/* //         <option key={municipality.id} value={municipality.id}>{municipality.name}</option>
    //       ))}
    //     </select> */}

	  {/* Ward dropdown */}
    {/* //     <select onChange={handleWardChange} value={selectedWard} disabled={!selectedMunicipality}>
    //       <option value="">Select a ward</option>
    //       {wards.map((ward) => ( */}
    {/* //         <option key={ward.id} value={ward.ward_number}>{ward.ward_number}</option>
    //       ))}
    //     </select> */}
    {/* //   </div> */}
       
	  {/* List of provinces with number of municipalities */}
	  {/* //  {!selectedProvince && !selectedMunicipality && ( */}
	  {/* //  <div className='province-list'>
    //     <ul>
    //       {provinces.map((province) => { */}
    {/* //         const provinceMunicipalities = municipalities.filter(municipality => municipality.province === province.id);
    //         return (
    //           <li key={province.id}>
    //             {province.name}: {provinceMunicipalities.length} municipalities
    //           </li>
    //         );
    //       })}
    //     </ul> */}
    {/* //   </div> */}
    {/* // )} */}

    {/* List of municipalities with number of wards */}
	  {/* // {selectedProvince && !selectedMunicipality &&( */}
	  {/* //  <div className='municipality-list'>
    //     <ul>
    //       {municipalities.map((municipality) => { */}
    {/* //         const municipalityWards = wards.filter(ward => ward.municipality === municipality.id);
    //         return (
    //           <li key={municipality.id}>
    //             {municipality.name}: {municipalityWards.length} wards
    //           </li>
    //         );
    //       })}
    //     </ul> */}
    {/* //   </div> */}
    {/* // )}  

    //    <div className='table'> */}
      {/* Table of Councilors Per Municipality */}
    {/* //     {selectedMunicipality &&( */}
    {/* //       <table>
    //         <thead>
    //           <tr>
    //             <th>Ward No</th>
    //             <th>Names</th>
    //             <th>Surname</th>
    //             <th>Affiliation</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {councilors.map((councilor) => ( */}
    {/* //             <tr key={councilor.id} onClick={() => handleCouncilorSelect(councilor.id)}>
    //               <td>{councilor.ward_number}</td>
    //               <td>{councilor.names}</td>
    //               <td>{councilor.surname}</td>
    //               <td>{councilor.affiliation}</td>
    //             </tr>
    //           ))}
    //         </tbody> */}
    {/* //       </table> */}
    {/* //     )}
    //   </div> */}
    {/* //   <div className='councilor-details'> */}
         {/* Councilors details */}
    {/* //     {selectedCouncilor &&( */}
    {/* //       <div>
    //         <h6>The councilor for ward {selectedWard}</h6>
    //         <h6>of {selectedMunicipality.name} Municipality</h6>
    //         <h6>of the {selectedProvince.name} Province</h6>
    //         <h6>is: {selectedCouncilor.names} {selectedCouncilor.surname}</h6>
    //         <h6>who is a member of {selectedCouncilor.affiliation}</h6>
    //       </div>
    //     )}
    //   </div> */}
    </div>
  );
};

export default MyCouncilor;
