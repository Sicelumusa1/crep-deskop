const MyProvince = ({ provinces, selectedProvince, handleProvinceChange }) => {
  return (
    <div>
        {/* Province dropdown */}
	      <select onChange={handleProvinceChange} value={selectedProvince}>
          <option value="">Select a province</option>
          {provinces.map((province) => (
           <option key={province.id} value={province.id}>{province.name}</option>
         ))}
        </select>
    </div>
  );
};

export default MyProvince;