// src/components/ViewParticipants.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ViewParticipants.css'; // Import your CSS file

function ViewParticipants() {
  const [level, setLevel] = useState('');
  const [classLevel, setClassLevel] = useState('');
  const [examYear, setExamYear] = useState('');
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle fetching and displaying the participants
    console.log({ level, classLevel, examYear, term });
  };

  return (
    <div className="view-participants-container"> {/* Apply container class */}
      <h1>View Participants</h1>
      <form onSubmit={handleSubmit}>
        <select className="form-control" value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="">Select Level</option>
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="college">College</option>
        </select>
        <input
          type="text"
          className="form-control"
          placeholder="Class Level"
          value={classLevel}
          onChange={(e) => setClassLevel(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Exam Year"
          value={examYear}
          onChange={(e) => setExamYear(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit" className="submit-button">Submit</button> {/* Apply button class */}
      </form>
      <Link to="/" className="back-button">
      <button className="btn btn-secondary btn-back">Back to Home</button>
      </Link>
    </div>
  );
}

export default ViewParticipants;
