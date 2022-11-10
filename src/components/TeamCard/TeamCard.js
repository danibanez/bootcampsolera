import { Link } from "react-router-dom";
import TeamCardStyles from "./TeamCard.module.css";

// Displays a specific team's name and total score in a compact element
function TeamCard(props) {
  return (
    <Link to={`/team/${props.id}`}>
      <button className={TeamCardStyles.team}>
        <h3>{props.name}</h3>
        <h2>{props.score}</h2>
      </button>
    </Link>
  );
}

export default TeamCard;
