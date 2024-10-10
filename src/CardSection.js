import Card from "./Card";

function CardSection() {
  // Define an array of card data with titles, descriptions, image sources, and background colors
  const cardData = [
    {
      title: "Enjoy on your TV",
      desc: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      img_src: "https://cdn3d.iconscout.com/3d/premium/thumb/screen-tv-3d-icon-download-in-png-blend-fbx-gltf-file-formats--monitor-display-technology-pack-appliances-icons-5331395.png?f=webp",
      bg_color: "#111212" 
    },
    {
      title: "Download your shows to watch offline",
      desc: "Save your favourites easily and always have something to watch.",
      img_src: "https://cdn-icons-png.flaticon.com/512/6188/6188621.png",
      bg_color: "#4248f5" 
    },
    {
      title: "Watch everywhere",
      desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      img_src: "https://cdn-icons-png.flaticon.com/512/6188/6188621.png",
      bg_color: "#c542f5" 
    },
    {
      title: "Create profiles for kids",
      desc: "Send kids on adventures with their favourite characters — free with your membership.",
      img_src: "https://cdn-icons-png.flaticon.com/512/6188/6188621.png",
      bg_color: "#f57e42" 
    }
  ];

  return (
    <>
      <h2 className="text-white">More reasons to join</h2>
      <div className="Card">
        <div className="container mt-5">
          <div className="row">
            {cardData.map((card) => (
              <Card
                title={card.title}
                desc={card.desc}
                img_src={card.img_src}
                style={{ backgroundColor: card.bg_color }} // Apply background color from the array
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardSection;
