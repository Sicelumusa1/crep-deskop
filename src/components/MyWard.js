import React from "react";
// import CouncilorInfo from "./Councilor";

const MyWard = ({ wards, selectedWard, handleWardChange, councilor }) => {
  return (
    <div>
        {/* Province dropdown */}
	      <select onChange={handleWardChange} value={selectedWard}>
          <option value="">Select a ward</option>
          {wards.map((ward) => (
           <option key={ward.id} value={ward.id}>{ward.ward_number}</option>
         ))}
        </select>
    </div>
  );
};

export default MyWard;