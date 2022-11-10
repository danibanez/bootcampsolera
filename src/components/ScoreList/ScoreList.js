import { Link } from "react-router-dom";
import ScoreListStyles from "./ScoreList.module.css";

// Displays a specific team's score in each activity in a table
function ScoreList(props) {
  return (
    <div className={ScoreListStyles.bodycomponent}>
      <h2 className={ScoreListStyles.h2}>SOLERA TEAMS. BOOTCAMP 4</h2>

      <table className={ScoreListStyles.tablecomponent}>
        <tr className={ScoreListStyles.rawcomponent}>
          <th>{props.team.name}</th>
          <th>{props.score}</th>
        </tr>
        {
          // A table row will be shown for each activity
          props.team.actividades.map((actividad) => (
            <tr>
              <td className={ScoreListStyles.columnone}> {actividad.name}</td>
              <td className={ScoreListStyles.columntwo}>
                {" "}
                {actividad.puntos} puntos
              </td>
            </tr>
          ))
        }
      </table>
      <Link className={ScoreListStyles.volver} to="/">
        VOLVER
      </Link>
    </div>
  );
}

export default ScoreList;
