import Main from "./components/Main"
import'./App.scss'
import Header from "./components/Header"
import jobsData from '../src/assets/data.json'
import React, { useState } from "react"

const App = () => {
  const [jobs, setJobs] = useState(jobsData);
  const [filters, setFilters] = useState([]);

  // {type: "role", value: "Senior"}
  const filterJobs = (jobs, updatedFilters) => {
      const filteredJobs = jobs.filter(job => {
        let levelCheck, roleCheck, languagesCheck, toolsCheck = false;

        console.log(levelCheck, roleCheck, languagesCheck, toolsCheck)

        if (updatedFilters.some(filter => filter.type === "level")) {
          levelCheck = true;
        };

        if (updatedFilters.some(filter => filter.type === "role")) {
          roleCheck = true;
        };

        if (updatedFilters.some(filter => filter.type === "language")) {
          languagesCheck = true;
        };

        if (updatedFilters.some(filter => filter.type === "tool")) {
          toolsCheck = true;
        };

        return (
          (levelCheck ? job.level === updatedFilters.find(filter => filter.type === "level").value : true)
          &&
          (roleCheck ? job.role === updatedFilters.find(filter => filter.type === "role").value : true)
          &&
          (toolsCheck ? updatedFilters.filter(filter => filter.type === "tool").every(filter => job.tools.indexOf(filter.value) > -1) : true) 
          &&
          (languagesCheck ? updatedFilters.filter(filter => filter.type === "language").every(filter => job.languages.indexOf(filter.value) > -1) : true)
        )
      })
      setJobs(filteredJobs);
    
  }
  const addFilter = (data) => {
    const existingData = filters.some(filter => filter.type === data.type && filter.value === data.value);
    if (!existingData) {

      const updatedFilters = [...filters, data];
      setFilters(updatedFilters);

      filterJobs(jobs, updatedFilters)
    }
  }

  const clearFilters = () => {
    setFilters([]);
    setJobs(jobsData);
  }

  const removeFilter = (filterData) => {
    console.log(filterData)
    const updatedFilters = filters.filter(  (filterItem) => {
      return (filterItem.type !== filterData.type && filterItem.value !== filterData.value)
    })
    setFilters(updatedFilters)
      
    filterJobs(jobsData, updatedFilters)
  }
  return (
    <div>
      <Header filters={filters} clearFilters={clearFilters} removeFilter={removeFilter}/>
      <Main jobs={jobs} addFilter={addFilter}/>
    </div>
  )
}

export default App;