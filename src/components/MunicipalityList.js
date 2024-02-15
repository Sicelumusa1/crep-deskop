import React from "react";

const MunicipalityList = ({ municipalities, wards }) => {
  return (
      <div className="municipality-list">
        <ul>
         {municipalities.map((municipality) => { 
            const municipalityWards = wards.filter(ward => ward.municipality === municipality.id)
            return (
              <li key={municipality.id}>
                {municipality.name}
              </li>
            );
          })};
        </ul>
      </div>
  );
};

export default MunicipalityList;