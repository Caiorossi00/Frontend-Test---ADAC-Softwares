import "./Contents.scss";
import card01 from "../../assets/images/card01.png";
import card02 from "../../assets/images/card02.png";

const Contents = () => {
  return (
    <section className="contents">
      <div className="contents-content">
        <h2 className="contents-title">Contents</h2>

        <p className="contents-text">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>

        <div className="contents-cards">
          <img src={card01} alt="Content card 1" className="contents-card" />
          <img src={card02} alt="Content card 2" className="contents-card" />
        </div>
      </div>
    </section>
  );
};

export default Contents;
