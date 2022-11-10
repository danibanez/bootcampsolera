import TableViewStyles from "./TableView.module.css";
import ScoreList from "../components/ScoreList/ScoreList";

// Activity table view
function TableView(props) {
  return (
    <div className="TableView">
      <ScoreList team={props.team} score={props.score} />
    </div>
  );
}

export default TableView;
