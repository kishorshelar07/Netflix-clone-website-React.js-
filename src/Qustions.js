import "./Qustions.css";

function Qustions(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="qustions text-white">
          <strong style={props.style}>{props.qustiontext}</strong>{" "}
          <span>+</span>
        </div>
      </div>
    </div>
  );
}

export default Qustions;
