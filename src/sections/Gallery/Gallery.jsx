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
        <h2 className="gallery-title" data-aos="fade-up">
          Gallery
        </h2>

        <p className="gallery-text" data-aos="fade-up" data-aos-delay="150">
          We focus on ergonomics and meeting you where you work.
          <br />
          It's only a keystroke away.
        </p>
      </div>

      <div className="gallery-desktop">
        <div className="gallery-flex">
          {[Card1_1, Card1_2, Card1_3, Card1_4].map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            />
          ))}
        </div>

        <div className="gallery-grid">
          {[Card2_1, Card2_2, Card2_3].map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              data-aos="zoom-in"
              data-aos-delay={index * 120}
            />
          ))}
        </div>
      </div>

      <div className="gallery-mobile">
        {[mobile, mobile1, mobile2, mobile3].map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            data-aos="fade-up"
            data-aos-delay={index * 120}
          />
        ))}
      </div>

      <button
        className="gallery-button"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        See more
      </button>
    </section>
  );
};

export default Gallery;
