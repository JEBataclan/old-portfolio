import "./Renders.css";
import Card from "../components/Card";

// 3d renders
import dreamSetup from "../images/dream-setup.png";
import sagingNaSaba from "../images/saging-na-saba.png";
import kingdomKey from "../images/kingdom-key.png";
import Bewilderment from "../images/bewilderment.png";
import Dice from "../images/dice.png";
import tokyoGhoulCoffee from "../images/tg-coffee.png";
import elFili from "../images/elfili.jpg";
import Chimpanzees from "../images/chimpanzees.jpg";

function Renders() {
  return (
    <section className="renders" id="renders-section">
      <div className="container-sm py-5">
        <h1 className="text-center section-title">3D RENDERS</h1>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={dreamSetup} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={Bewilderment} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={tokyoGhoulCoffee} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={Dice} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={elFili} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={kingdomKey} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={sagingNaSaba} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={kingdomKey} class="d-block w-100" alt="..."/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Renders;
