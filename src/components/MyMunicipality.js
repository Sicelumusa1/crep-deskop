const MyMunicipality = ({ municipalities, selectedMunicipality, handleMunicipalityChange }) => {
  return (
    <div>
        {/* Province dropdown */}
	      <select onChange={handleMunicipalityChange} value={selectedMunicipality}>
          <option value="">Select a municipality</option>
          {municipalities.map((municipality) => (
           <option key={municipality.id} value={municipality.id}>{municipality.name}</option>
         ))}
        </select>
    </div>
  );
};

export default MyMunicipality;