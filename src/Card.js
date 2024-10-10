import "./Card.css"; // Ensure you have appropriate styles if needed

function Card(props) {
  return (
    <div className="col-6 col-md-6 col-lg-3 mb-4">
      <div className="card bg-dark text-white border-0">
        <div className="card-body" style={props.style}>
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <div className="text-center">
            <img src={props.img_src} alt="Icon" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
