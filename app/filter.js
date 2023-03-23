import { useEffect, useState } from "react";

import styles from './filter.module.css'
import jobs from '@/public/jobsData'




const [filteredList, setFilteredList] = useState(alljobsList);
const [selectedProfesion, setSelectedProfesion] = useState("");

return (
    <div id="jobs-list">
      {filteredList.map((item, index) => (
         <div className="job-item" key={index}>
           <div className="job-title">{`Name: ${item.title}`}</div>
           <div className="car-year">{`Year: ${item.company}`}</div>
         </div>
      ))}
    </div>
  );

  const filterByProfesion = (filteredData) => {
    // Avoid filter for empty string
    if (!selectedProfesion) {
      return filteredData;
    }
  
    const filteredProfesion = filteredData.filter(
      (job) => job.name.split(" ").indexOf(selectedProfesion) !== -1
    );
    return filteredProfesion;
  };

  const handleProfesionChange = (event) => {
    setSelectedProfesion(event.target.value);
  };
  

<div className="job-filter">
  <div>Filter by Profesion :</div>
  <select
    id="profesion-input"
    value={selectedProfesion}
    onChange={handleProfesionChange}
  >
    <option value="">All</option>
    <option value="Transport">Transport</option>
    <option value="VårdOmsorg">Vård och omsorg</option>
    <option value="Utbildning">Utbildning</option>
    <option value="Administration">Administration</option>
    <option value="Restaurang">Restaurang</option>
    <option value="Itsupport">It-Support</option>
    <option value="Underhall">Underhåll</option>
    <option value="Sakerhet">Säkerhetsarbete</option>
    <option value="Konstruktor">Konstruktör</option>
    <option value="Itconsult">It-consult</option>

  </select>
</div>

useEffect(() => {
    var filteredData = filterByProfesion(jobList);
    setFilteredList(filteredData);
  }, 
  [selectedProfesion]);






