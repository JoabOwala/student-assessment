// src/components/AddParticipants.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Participants.css"; // Import consolidated CSS file

function AddParticipants() {
  const [ke, setKe] = useState("");
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle adding the student details
    console.log({ ke, name, level, age });
  };

  return (
    <div className="participants-container">
      <h1>Add Participants</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Ke_No"
          value={ke}
          onChange={(e) => setKe(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          className="form-control"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="">Select Level</option>
          <option value="elementary">Elementary</option>
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="college">College</option>
          <option value="university">University</option>
        </select>
        <input
          type="number"
          className="form-control"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit" className="btn-primary submit-button">
          Add
        </button>
      </form>
      <Link to="/" className="btn btn-secondary btn-back">
        Back to Home
      </Link>
    </div>
  );
}

export default AddParticipants;
