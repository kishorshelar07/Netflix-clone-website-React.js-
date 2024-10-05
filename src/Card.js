import "./Card.css";

function Card() {
  return (
    <div className="Card">
      <div className="container mt-5">
        <h2 className="text-white mb-4">More reasons to join</h2>
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-3">
            <div className="card bg-dark text-white border-0">
              <div className="card-body">
                <h5 className="card-title">Enjoy on your TV</h5>
                <p className="card-text">
                  Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                  Blu-ray players, and more.
                </p>
                <div className="text-center">
                  {/* TV Icon */}
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/screen-tv-3d-icon-download-in-png-blend-fbx-gltf-file-formats--monitor-display-technology-pack-appliances-icons-5331395.png?f=webp"
                    alt="TV Icon"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-3">
            <div className="card bg-dark text-white border-0">
              <div className="card-body">
                <h5 className="card-title">
                  Download your shows to watch offline
                </h5>
                <p className="card-text">
                  Save your favourites easily and always have something to
                  watch.
                </p>
                <div className="text-center">
                  {/* Download Icon */}
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6188/6188621.png"
                    alt="Download Icon"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-3">
            <div className="card bg-dark text-white border-0">
              <div className="card-body">
                <h5 className="card-title">Watch everywhere</h5>
                <p className="card-text">
                  Stream unlimited movies and TV shows on your phone, tablet,
                  laptop, and TV.
                </p>
                <div className="text-center">
                  {/* Watch Icon */}
                  <img
                    src="https://www.creativefabrica.com/wp-content/uploads/2022/01/25/Golden-wings-logo-on-black-background-Graphics-24069400-1-312x208.jpg"
                    alt="Watch Icon"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-3">
            <div className="card bg-dark text-white border-0">
              <div className="card-body">
                <h5 className="card-title">Create profiles for kids</h5>
                <p className="card-text">
                  Send kids on adventures with their favourite characters   — free with your membership.
                </p>
                <div className="text-center">
                  {/* Kids Icon */}
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/019/513/373/original/kids-reading-a-book-with-moon-background-logo-design-template-with-dark-background-vector.jpg"
                    alt="Kids Icon"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
