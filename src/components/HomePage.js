// src/components/HomePage.js
import React from "react";
import { useHistory } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const history = useHistory();

  return (
    <div className="container home-container">
      <h1>Welcome</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/add-participantS")}
      >
        Add Participant
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => history.push("/view-participants")}
      >
        View Participants
      </button>
    </div>
  );
}

export default HomePage;
