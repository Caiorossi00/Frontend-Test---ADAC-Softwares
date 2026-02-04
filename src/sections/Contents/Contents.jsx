import "./Contents.scss";
import macbook from "../../assets/images/contents/Macbook.png";
import boards from "../../assets/images/contents/Boards.png";

const cards = [
  {
    title: "Work",
    text: "Ever wondered if you're too reliant on a client for work? Slate helps you identify.",
    button: "Sign Up",
    image: macbook,
    variant: "light",
  },
  {
    title: "Design with real data",
    text: "Ever wondered if you're too reliant on a client for work? Slate helps you identify.",
    button: "Try For Free",
    image: boards,
    variant: "dark",
  },
];

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
          {cards.map((card, index) => (
            <div
              className={`contents-card contents-card--${card.variant}`}
              key={index}
            >
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>

              <button className="card-button">{card.button}</button>

              <div className="card-image">
                <img src={card.image} alt={card.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contents;
