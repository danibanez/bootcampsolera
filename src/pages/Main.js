import React from "react";
import MainStyles from "./Main.module.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TeamCard from "../components/TeamCard/TeamCard";

var menu = document.getElementById("menu");

// Main view
function Main({ teamdata, sumPoints }) {
  return (
    <span>
      <h1>SOLERA TEAMS. BOOTCAMP 4</h1>
      <div className={MainStyles.container}>
        {
          // For each team, a Team Card will be displayed
          teamdata.map((team) => (
            <TeamCard
              id={team.id}
              name={team.name}
              score={sumPoints(team)}
              route
            />
          ))
        }
      </div>
    </span>
  );
}
export default Main;
