import React, { useState, useEffect } from "react";
import axios from "axios";


const CouncilorTable = ({ selectedMunicipality }) => {
const [wards, setWards] = useState([]);   
const [councilors, setCouncilors] = useState([]);



useEffect(() => {
      // Fetch wards for the selected municipality
  axios.get(`http://127.0.0.1:8000/crep/municipalities/${selectedMunicipality}/wards/`)
    .then((response) => {
      setWards(response.data);
    })
    .catch((error) => console.error('Error fetching wards:', error));
}, [selectedMunicipality]);

useEffect(() => {
  // Fetch councilors for each ward
  const fetchCouncilors = async () => {
    const councilorsData = await Promise.all(wards.map(async (ward) => {
      const response = await axios.get(`http://127.0.0.1:8000/crep/wards/${ward.ward_number}/councilors`);
      return response.data;
    }));
    const flatCouncilorsData = councilorsData.flat();
    setCouncilors(flatCouncilorsData);
  };

  if (wards.length > 0) {
    fetchCouncilors();
  }
}, [wards]);


return (
      <div className="table">
          <h3>Councilors Under This Municipality</h3>
        <table>
             <thead>
               <tr>
                 <th>Ward No</th>
                 <th>Names</th>
                 <th>Surname</th>
                 <th>No of Ratings</th>
                 <th>Average Rating</th>
               </tr>
             </thead>
             <tbody>
               {councilors.map((councilor) => ( 
               <tr key={councilor.id}>
                   <td>{councilor.ward_number}</td>
                   <td>{councilor.names}</td>
                   <td>{councilor.surname}</td>
                   <td>{councilor.no_of_ratings}</td>
                   <td>{councilor.avg_ratings}</td>
                 </tr>
               ))}
             </tbody> 
        </table> 
      </div>
  );
};

export default CouncilorTable;