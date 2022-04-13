import React from "react";
import "./About.css";
import {
  FaCss3Alt,
  FaReact,
  FaHtml5,
  FaNode,
  // FaGithub,
  // FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoLogoJavascript, IoMailSharp } from "react-icons/io5";
import { DiMongodb, DiFirebase } from "react-icons/di";
import { SiTypescript, SiRedux, SiGithub } from "react-icons/si";
import { TiLocation } from "react-icons/ti";
import { Container, Grid } from "@material-ui/core";
import home from "../../images/mypic.png";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function About() {
  const classes = useStyles();

  return (
    <div id="about" className="about">
      <div className={classes.root}>
        <h1 className="project_header">About</h1>

        <Grid
          container
          spacing={0}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <div className="about_left">
              <div className="left_bar"></div>
              <h1 style={{ color: "white" }}>Skills</h1>
              <div className="left_bar">
                <Tooltip title={<h1 style={{ color: "white" }}>HTML</h1>}>
                  <div className="tech">
                    <FaHtml5
                      style={{
                        color: "white",
                        fontSize: "75px",
                        margin: "5px",
                      }}
                    />
                  </div>
                </Tooltip>
                <Tooltip title={<h1 style={{ color: "white" }}>CSS</h1>}>
                  <div className="tech">
                    <FaCss3Alt
                      style={{
                        color: "white",
                        fontSize: "75px",
                        margin: "5px",
                      }}
                    />
                  </div>
                </Tooltip>
                <Tooltip title={<h1 style={{ color: "white" }}>NodeJs</h1>}>
                  <div className="tech">
                    <FaNode style={{ color: "white", fontSize: "80px" }} />
                  </div>
                </Tooltip>
              </div>
              <div className="left_bar">
                <Tooltip title={<h1 style={{ color: "white" }}>ReactJs</h1>}>
                  <div className="tech">
                    <FaReact style={{ color: "white", fontSize: "80px" }} />
                  </div>
                </Tooltip>
                <Tooltip title={<h1 style={{ color: "white" }}>Redux</h1>}>
                  <div className="tech">
                    <SiRedux style={{ color: "white", fontSize: "80px" }} />
                  </div>
                </Tooltip>
                <Tooltip title={<h1 style={{ color: "white" }}>JavaScript</h1>}>
                  <div className="tech">
                    <IoLogoJavascript
                      style={{
                        color: "white",
                        fontSize: "70px",
                        margin: "10px",
                      }}
                    />
                  </div>
                </Tooltip>
              </div>
              <div className="left_bar">
                <Tooltip title={<h1 style={{ color: "white" }}>MongoDB</h1>}>
                  <div className="tech">
                    <DiMongodb style={{ color: "white", fontSize: "80px" }} />
                  </div>
                </Tooltip>
                <Tooltip title={<h1 style={{ color: "white" }}>Firebase</h1>}>
                  <div className="tech">
                    <DiFirebase style={{ color: "white", fontSize: "80px" }} />
                  </div>
                </Tooltip>
                <Tooltip title={<h1 style={{ color: "white" }}>GitHub</h1>}>
                  <div className="tech">
                    <SiGithub
                      style={{
                        color: "white",
                        fontSize: "60px",
                        margin: "15px",
                      }}
                    />
                  </div>
                </Tooltip>
              </div>
            </div>
          </Grid>

          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <div className="about_right">
              <div className="info">
                <div className="about_rightimg">
                  <img className="profilePic" src={home} alt="" width="190px" />
                </div>

                <h1 className="name">Upendra Kumar Chauhan</h1>
                <span className="role">Full Stack Developer</span>
                <p className="about-text">
                  <span>
                    An ambitious and detail-oriented aspiring Full Stack
                    Developer with a BTech in Computer Science, adept at
                    JavaScript technologies across MERN Stack and solving Data
                    Structures and Algorithm problems, is a curious learner and
                    excellent team player.
                  </span>

                  <span>
                    <br /> Strongly interested in obtaining a Software Developer
                    position to leverage the goals and ambition of the
                    organization.
                  </span>
                </p> <hr />
                <p className="number">
                  <IoMailSharp /> chauhanup47@gmail.com
                </p>
                <p className="number">
                  <FaPhoneAlt /> +91-7880334068
                </p>
                <p className="location">
                  <TiLocation /> Lucknow, Uttar Pradesh, India
                </p>
                {/* <div style={{ display: "flex", flexDirection: "row" }}>
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1mG9EsaShS2tTchPKLBmBm9mlrA9KEDRX/view?usp=sharing"
                  >
                    <h3
                      style={{
                        marginTop: "3px",
                        fontSize: "20px",
                        color: "white",
                      }}
                    >
                      View Full Resume
                    </h3>
                  </a>
                </div> */}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default About;
