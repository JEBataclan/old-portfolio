import "./AboutMe.css";
import BATACLAN from "../images/bataclan.jpg";

function AboutMe() {
  return (
    <section className="aboutme" id="aboutme-section">
      <div className="container">
        <div className="aboutme-content">
          <img
            src={BATACLAN}
            alt="Jan Erickson Bataclan"
            className="aboutme-image"
          />
          <p className="aboutme-text">
            Based in Manila, I am currently a 3rd year student of Technological
            University of the Philippines - Manila, taking Bachelor of Science in
            Computer Science. I consider myself knowledgeable and at the same time
            still ignorant in the field of Information Technology for I believe
            that it is ever changing and evolving, thus, there will always be new
            things to learn. But because I haven't found my strengths yet in this
            field, I tend to make myself as flexible as possible while looking for
            it. My love for video games aspired me to be a game developer, but
            there is one weakness I must overcome first, designing.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
