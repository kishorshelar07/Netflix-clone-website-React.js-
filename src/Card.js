import "./Card.css";

function Card(props) {
  return (
    <div className="col-md-3">
      <div className="card bg-dark text-white border-0" > {/* Apply the background color here */}
        <div className="card-body" style={props.style}>
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <div className="text-center">
            <img src={props.img_src} alt="TV Icon" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
