import React from 'react';
//code to savedjobs with localstorage
function SavedJobs({ savedJobs }) {
  return (
    <div>
      <h1>Saved Jobs</h1>
      <ul>
        {savedJobs.map((job) => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <h4>{job.company}</h4>
            <p>{job.jobDescription}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const savedJobs = Object.keys(localStorage).map((key) => JSON.parse(localStorage.getItem(key)));

  return (
    <div>
      <JobList />
      <SavedJobs savedJobs={savedJobs} />
    </div>
  );
}