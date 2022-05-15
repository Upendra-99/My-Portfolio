import React from "react";
import "../Home.css";
import ban from "../../images/CodingLappy.webp";
import rocket from "../../images/home1.svg";
import Typical from "react-typical";
import { Link } from "react-scroll";

function Home() {
  return (
    <div className="home_top">
      <div className="home_banner">

        <div className="home_profile">
          <h1 className="home_tag">Full Stack Developer</h1>
          <h1 className="home_name">
            <span>Upendra Kumar Chauhan</span>
          </h1>
          <Typical
            steps={[
              "Frontend",
              800,
              "Backend",
              1000,
              "Data structures and algorithms",
              800,
            ]}
            loop={Infinity}
            wrapper="p"
            className="home_subtag"
          />
          <div className="buttons">
            <Link to="projects" spy={true} smooth={true}>
              <div className="home_getstarted">
                <p className="home-profile-btn">View my work</p>
              </div>
            </Link>

            <a className="margin-left" target=" _blank" href="https://drive.google.com/file/d/1sAK5bAS9mtTlCDqzQeSjT1V5y1rmorD0/view?usp=sharing" >
              <div className="home_getstarted">
                <p className="home-profile-btn">Resume</p>
              </div>
            </a>

          </div>
        </div>

        <div className="image-cont">
          <img src={rocket} className="home_image" alt="gif" />
          {/* <img src={ban} className="home_image" alt="gif" /> */}
        </div>

      </div>
    </div>
  );
}

export default Home;
