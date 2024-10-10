import "./Carousel.css";

function Carousel({ card_img, bg_color }) {
  return (
    <div className="Carousel">
      <div className="col-md-3 ">
        <div className="card text-white border-0" style={{ backgroundColor: bg_color }}>
          <div className="card-body d-flex">
            <div>
              <img
                style={{ height: "220px", width: "200px" }}
                src={card_img}
                alt="TV Icon"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
