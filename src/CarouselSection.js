import Carousel from "./Carousel";

function CarouselSection() {
  // Array of image URLs
  const carouselImages = [
    {
      img_src: "https://occ-0-4258-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABeNW_c9U9xz-Et1ZyU6zq1A1X3Dpuw90kY4WTTX0QqT4Rob8rlDd4Mf17LnqNX6gM74q5aFjQYrm6Qh_Q_EKy8nIXrmKqcPcmdg0zLxXZgSdtu2nUMRa6PxDDGR8M7oGuD3ujQNmDWC9aCnW3THvp4e-LQv46PNAEJwsV1pFD7CQAoFEHu_eOUHvgH2XQxsXjb4QU-pjKFKRs7nRS5N7eFOL9Slo2nWZqW5fB6jvhFJq7PPEu_qMYmS4EkjitCOpa5E8GmbfZwv4jbRGahoc1J4QLX8UuG2CzftTm8Fxw-VmMxsx-MPTM23iLhefxi2FaaLNT-JAAjzYeeEh6eS2l7I.webp?r=7a3",
      bg_color: "pink",
    },
    {
      img_src: "https://preview.redd.it/new-posters-of-ulajh-which-releases-on-august-2-v0-hwoztxjjzsbd1.png?width=1080&crop=smart&auto=webp&s=f798ed879105f3c63bf0850e2d9a7e49078dfd8d",
      bg_color: "green",
    },
    {
      img_src: "https://m.media-amazon.com/images/M/MV5BMGE0YWU1MmEtN2FhMS00NzBlLWE3MTgtMWZkYjdmNDg5ZTFiXkEyXkFqcGc@._V1_.jpg",
      bg_color: "yellow",
    },
    {
      img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-U2iP6ZC0uRP-DzsTy2rhat3w5kqcsvhQ5Q&s",
      bg_color: "red",
    },
  ];

  return (
    <>
      <div className="carousel">
        <div className="text-name">
          <h4>Trending now</h4>
          <div className="navbar-right d-flex">
            <div className="language-select">
              <button className="lang-btn">
                India <i className="bi bi-caret-down-fill"></i>
              </button>
              <button className="lang-btn">
                Movies <i className="bi bi-caret-down-fill"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="d-flex">
              {carouselImages.map(({ img_src, bg_color }) => (
                <Carousel card_img={img_src} bg_color={bg_color} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselSection;
