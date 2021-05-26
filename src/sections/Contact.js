import "./Contact.css"
import { Link } from "react-scroll";

import FacebookLogo from "../images/facebook-logo.png"
import TwitterLogo from "../images/twitter-logo.png"
import InstagramLogo from "../images/instagram-logo.png"
import YoutubeLogo from "../images/youtube-logo.png"

function Contact() {
  return (
    <section id="contact-section">
      <div className="mydark-bg py-4">
        <div className="d-flex justify-content-center">
          <div classNameName="flex-column">
            <div className="row my-2"><p className="text-center email">jebataclan@gmail.com</p></div>
            <div className="row my-2">
              <div className="col-3"><a href="https://www.facebook.com/JEBataclan/" target="_blank"><img className="logo" src={FacebookLogo}/></a></div>
              <div className="col-3"><a href="https://www.twitter.com/JEBataclan/" target="_blank"><img className="logo" src={TwitterLogo}/></a></div>
              <div className="col-3"><a href="https://www.instagram.com/JEBataclan/" target="_blank"><img className="logo" src={InstagramLogo}/></a></div>
              <div className="col-3"><a href="https://www.youtube.com/channel/UCr0Wy5RFDnMJbxjsiDCdgOg" target="_blank"><img className="logo" src={YoutubeLogo}/></a></div>
            </div>
            <div className="row mt-4">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item" aria-current="page">
                    <Link
                      color="inherit"
                      to="home-section"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    <Link
                      color="inherit"
                      to="aboutme-section"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      About Me
                    </Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    <Link
                      color="inherit"
                      to="projects-section"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Projects
                    </Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    <Link
                      color="inherit"
                      to="renders-section"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Renders
                    </Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    <Link
                      color="inherit"
                      to="contact-section"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Contact
                    </Link>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
