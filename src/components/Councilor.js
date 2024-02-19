import RatingForm from "./RatingForm";

const CouncilorInfo = ({ selectedCouncilor,selectedMunicipalityName, selectedProvinceName }) => {

  // console.log('Councilor object:', selectedCouncilor);
  // console.log('Municipality object:', selectedMunicipalityName);
  // console.log('Province object:', selectedProvinceName);
  

  if (!selectedCouncilor || selectedCouncilor.length === 0){
    return
}  

const councilorInfo = selectedCouncilor[0];
  return (
    <div className="councilor-details">
        {/* Councilor details */}
        {selectedProvinceName && <h4>Province:  {selectedProvinceName} </h4>}
        {selectedMunicipalityName && <h4>Municipality:  {selectedMunicipalityName} </h4>}
        <h4>Ward:  {councilorInfo.ward_number}</h4>
        <h4>Name:  {councilorInfo.names} {councilorInfo.surname}</h4>
        <h4>Councilor Affiliation:  {councilorInfo.affiliation}</h4>
        <h4>Number of Ratings:  {councilorInfo.no_of_ratings}</h4>
        <h4>Average Ratings:  {councilorInfo.avg_ratings}</h4>

        {/* Display rating form*/}
        <RatingForm councilorId={councilorInfo.id} />
    </div>
  );
};

export default CouncilorInfo;