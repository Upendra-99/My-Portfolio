import React from "react";
import "./Getin.css";
import { FaGithub, FaLinkedin, FaPhoneAlt, FaDownload } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import Tooltip from "@material-ui/core/Tooltip";

function Getin() {
  return (
    <div className="getin" id="contact">
      <div className="main">
        <div className="form">
          <div className="getinheading">
            <h1
              style={{ color: "white", margin: "auto", width: "fit-content" }}
            >
              Get in Touch
            </h1>
          </div>

          <div className="contact">
            <div className="getinleft">
              <form action="https://formspree.io/f/xknkqogp" method="POST">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name"
                  required="true"
                />
                <br />
                <input
                  type="mail"
                  id="mailid"
                  name="Email"
                  placeholder="Email Address"
                  required="true"
                />
                <br></br>
                <input
                  type="text"
                  id="sub"
                  name="Subject"
                  placeholder="Subject"
                  required="true"
                />
                <br></br>
                <textarea
                  id="msg"
                  name="message"
                  placeholder="Message"
                  required="true"
                ></textarea>
                <br />

                <button
                  type="submit"
                  variant="contained"
                  size="50px"
                  className="btn"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="getinright">
              <div className="getinright1">
                <h4
                  style={{
                    color: "white",
                    fontFamily: "sans-serif",
                    fontWeight: "500",
                    margin: "15px",
                    fontSize: "18px",
                  }}
                >
                  Let's Connect
                </h4>
              </div>

              <div className="getinright1">
                <a target="_blank" href="www.linkedin.com/in/chauhanupendra">
                  <FaLinkedin className="con" />
                </a>
                <a target="_blank" href="https://github.com/Upendra-99">
                  <FaGithub className="con" />
                </a>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1mG9EsaShS2tTchPKLBmBm9mlrA9KEDRX/view?usp=sharing"
                >
                  <FaDownload className="con" />
                </a>
                <a target="_blank" href="tel: +91-7880334068">
                  <FaPhoneAlt className="con" />
                </a>
                <a target="_blank" href="mailto: chauhanup47@gmail.com">
                  <IoMailSharp className="con" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Getin;
