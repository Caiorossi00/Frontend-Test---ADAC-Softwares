import "./Gallery.scss";

import Card1_1 from "../../assets/images/gallery/grid1/Card.png";
import Card1_2 from "../../assets/images/gallery/grid1/Card-1.png";
import Card1_3 from "../../assets/images/gallery/grid1/Card-2.png";
import Card1_4 from "../../assets/images/gallery/grid1/Card-3.png";

import Card2_1 from "../../assets/images/gallery/grid2/Card.png";
import Card2_2 from "../../assets/images/gallery/grid2/Card-1.png";
import Card2_3 from "../../assets/images/gallery/grid2/Card-2.png";

import mobile from "../../assets/images/gallery/mobile/mobile.png";
import mobile1 from "../../assets/images/gallery/mobile/mobile1.png";
import mobile2 from "../../assets/images/gallery/mobile/mobile2.png";
import mobile3 from "../../assets/images/gallery/mobile/mobile3.png";

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

      <div className="gallery-desktop">
        <div className="gallery-flex">
          <img src={Card1_1} alt="" />
          <img src={Card1_2} alt="" />
          <img src={Card1_3} alt="" />
          <img src={Card1_4} alt="" />
        </div>

        <div className="gallery-grid">
          <img src={Card2_1} alt="" />
          <img src={Card2_2} alt="" />
          <img src={Card2_3} alt="" />
        </div>
      </div>

      <div className="gallery-mobile">
        <img src={mobile} alt="" />
        <img src={mobile1} alt="" />
        <img src={mobile2} alt="" />
        <img src={mobile3} alt="" />
      </div>

      <button className="gallery-button">See more</button>
    </section>
  );
};

export default Gallery;
