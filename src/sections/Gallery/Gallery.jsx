import "./Gallery.scss";

import Card1_1 from "../../assets/images/gallery/grid1/Card.png";
import Card1_2 from "../../assets/images/gallery/grid1/Card-1.png";
import Card1_3 from "../../assets/images/gallery/grid1/Card-2.png";
import Card1_4 from "../../assets/images/gallery/grid1/Card-3.png";

import Card2_1 from "../../assets/images/gallery/grid2/Card.png";
import Card2_2 from "../../assets/images/gallery/grid2/Card-1.png";
import Card2_3 from "../../assets/images/gallery/grid2/Card-2.png";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery-header">
        <h2 className="gallery-title">Gallery</h2>
        <p className="gallery-text">
          We focus on ergonomics and meeting you where you work.
          <br />
          It's only a keystroke away.
        </p>
      </div>

      <div className="gallery-flex">
        <img src={Card1_1} alt="Drone" />
        <img src={Card1_2} alt="Tablet" />
        <img src={Card1_3} alt="Meeting" />
        <img src={Card1_4} alt="Workspace" />
      </div>

      <div className="gallery-grid">
        <img src={Card2_1} alt="Code" />
        <img src={Card2_2} alt="Laptop" />
        <img src={Card2_3} alt="Camera" />
      </div>

      <button className="gallery-button">See more</button>
    </section>
  );
};

export default Gallery;
