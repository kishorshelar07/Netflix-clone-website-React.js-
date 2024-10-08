import "./Carousel.css";


function Carousel(props) {
  return (
  
    <div className="Carousel" >
     {/* 1 */}
     <div className="col-md-3">
        <div className="card bg-dark text-white border-0">
          <div className="card-body d-flex">
             <div >
              <img style={{ height: "220px",width:"200px" }} src={props.card_img} alt="TV Icon" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Carousel;
