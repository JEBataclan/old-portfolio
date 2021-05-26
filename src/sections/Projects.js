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
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col">
            <Card
              img={PayrollSystem}
              title="Lorem"
              description="Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              link=""
            />
          </div>
          <div className="col">
            <Card
              img={TUPGGOverlay}
              title="Lorem"
              description="Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              link=""
            />
          </div>
          <div className="col">
            <Card
              img={Tag}
              title="Lorem"
              description="Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              link=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
