import "./Projects.css";
import Card from "../components/Card";

import PayrollSystem from "../images/payroll-system.png";
import TUPGGOverlay from "../images/gglol-smartoverlay.png";
import Tag from "../images/t4g.PNG";

function Projects() {
  return (
    <section className="projects" id="projects-section">
      <div className="container-sm py-5">
      <h1 className="text-center section-title">PROGRAMMING PROJECTS</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col">
            <Card
              img={PayrollSystem}
              title="Payroll System (WIP)"
              description="Our group's on-going project for our Software Engineering 2."
              link="https://github.com/JEBataclan/payroll-system"
            />
          </div>
          <div className="col">
            <Card
              img={TUPGGOverlay}
              title="TUP GG:LoL Smart Overlay"
              description="Smart Overlay Picks and Bans Selection for TUP GG:LoL."
              link="https://github.com/JEBataclan/lol-pick-ban-ui"
            />
          </div>
          <div className="col">
            <Card
              img={Tag}
              title="T4G Game"
              description="A 2D platformer 2-player game wherein you have to catch or run from the opposing player."
              link="https://github.com/JEBataclan/t4g"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
