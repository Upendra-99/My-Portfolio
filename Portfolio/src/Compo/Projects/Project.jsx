import React from "react";
import "./Project.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import imgur from "../../images/imgur.png";
import travel from "../../images/Travelista.png";
import quora from "../../images/Quora-Clone.png";
import { FaReact, FaHtml5, FaGit } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io5";
import { DiMongodb, DiFirebase } from "react-icons/di";
import { SiRedux, SiMaterialUi, SiCss3, SiHtml5, SiJavascript } from "react-icons/si";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  btn: {
    backgroundColor: "#3498db",
  },
}));

function Project() {
  const classes = useStyles();

  return (
    <div id="projects" className="project">
      <h1 className="project_header">Project</h1>
      <br />
      <br></br>

      <div className={classes.root}>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {/* project -1 starts */}
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="projectdiv"
          >
            <Paper>
              <div className="container">
                <div className="content">
                  <div className="content-overlay"></div>
                  <img src={quora} alt="quora" className="shine_img" />
                  <div class="content-details fadeIn-top">
                    <h3>Quora Clone</h3>
                    {/* <p>E-Commerce Website</p> */}
                  </div>
                </div>

                <div className="gitlive">
                  <a
                    href="https://github.com/Upendra-99/Quora-Clone/tree/master/quora-website"
                    target="_blank "
                  >
                    <Button
                      className={classes.btn}
                      variant="contained"
                      style={{ fontSize: "14px" }}
                    >
                      GitHub
                    </Button>
                  </a>
                  <div style={{ width: "20px" }} />
                  <a href="https://quoraclonewebsite.netlify.app/login" target="_blank "  >
                    <Button
                      className={classes.btn}
                      variant="contained"
                      style={{ fontSize: "14px" }}
                    >
                      Live
                    </Button>
                  </a>
                </div>
              </div>
            </Paper>
          </Grid>

          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="projectdiv"
          >
            <Paper>
              <div className="container1">
                <div className="content1">
                  <h3>Quora</h3>
                  <p> It's a clone of an American social question-and-answer 'Quora' website that allows to ask questions, get useful answers, and share what you know with the world.
                  </p>
                  <p> <b>Project duration</b> : 6 days</p>
                  <p> <b>TechStack </b>:HTML, CSS, javaScript, ReactJs, Redux, Material UI, GitHub, Netlify, Firebase and Json-Server </p>
                  <p> <b>Team </b>: 3 members</p>
                </div>
                <div style={{ textAlign: 'left', paddingLeft: '30px' }}>
                  <SiCss3 className="tech-stack-logo" />
                  <SiHtml5 className="tech-stack-logo" />
                  <SiJavascript className="tech-stack-logo" />
                  <FaReact className="tech-stack-logo" />
                  <FaGit className="tech-stack-logo" />
                  <SiRedux className="tech-stack-logo" />
                  <SiMaterialUi className="tech-stack-logo" />
                  <DiFirebase className="tech-stack-logo" />
                </div>
              </div>
            </Paper>
          </Grid>
          {/* project -1 ends */}

          {/* project -2 starts */}
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="projectdiv"
          >
            <Paper>
              <div className="container">
                <div className="content">
                  <div className="content-overlay"></div>
                  <img src={imgur} alt="shine" className="shine_img" />
                  <div class="content-details fadeIn-top">
                    <h3>Travelista</h3>
                    {/* <p>E-Commerce Website</p> */}
                  </div>
                </div>

                <div className="gitlive">
                  <a
                    href="https://github.com/Upendra-99/imgur-clone"
                    target="_blank "
                  >
                    <Button
                      className={classes.btn}
                      variant="contained"
                      style={{ fontSize: "14px" }}
                    >
                      GitHub
                    </Button>
                  </a>
                  <div style={{ width: "20px" }} />
                  <a href="https://imgurcloneupendra.netlify.app/" target="_blank "  >
                    <Button
                      className={classes.btn}
                      variant="contained"
                      style={{ fontSize: "14px" }}
                    >
                      Live
                    </Button>
                  </a>
                </div>
              </div>
            </Paper>
          </Grid>

          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="projectdiv"
          >
            <Paper>
              <div className="container1">
                <div className="content1">
                  <h3>Imgur Clone</h3>
                  <p> Imgur is an American online image service where you’ll find the
                    funniest, informative and inspiring images, memes and GIFs.
                  </p>
                  <p> <b>Project duration</b> : 2 days</p>
                  <p> <b>TechStack </b>: HTML, CSS and javaScript</p>
                </div>
                <div style={{ textAlign: 'left', paddingLeft: '30px' }}>
                  <SiCss3 className="tech-stack-logo" />
                  <SiHtml5 className="tech-stack-logo" />
                  <SiJavascript className="tech-stack-logo" />
                </div>
              </div>
            </Paper>
          </Grid>
          {/* project -2 ends */}

          {/* project -3 starts */}
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="projectdiv"
          >
            <Paper>
              <div className="container">
                <div className="content">
                  <div className="content-overlay"></div>
                  <img src={travel} alt="shine" className="shine_img" />
                  <div class="content-details fadeIn-top">
                    <h3>Travelista</h3>
                    {/* <p>E-Commerce Website</p> */}
                  </div>
                </div>

                <div className="gitlive">
                  <a
                    href="https://github.com/ansari-saif/Travel"
                    target="_blank "
                  >
                    <Button
                      className={classes.btn}
                      variant="contained"
                      style={{ fontSize: "14px" }}
                    >
                      GitHub
                    </Button>
                  </a>
                  <div style={{ width: "20px" }} />
                  <a href="https://prashant-sharma-tws.github.io/Travel/" target="_blank "  >
                    <Button
                      className={classes.btn}
                      variant="contained"
                      style={{ fontSize: "14px" }}
                    >
                      Live
                    </Button>
                  </a>
                </div>
              </div>
            </Paper>
          </Grid>

          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="projectdiv"
          >
            <Paper>
              <div className="container1">
                <div className="content1">
                  <h3>Travelista</h3>
                  <p> A website that offers travellers to choose popular destination, affordable travelling package and helps with other services like cruise booking, food features and rent cars.
                  </p>
                  <p> <b>Project duration</b> : 5 days</p>
                  <p> <b>TechStack </b>: HTML, CSS and javaScript</p>
                  <p> <b>Team </b>: 4 members</p>
                </div>
                <div style={{ textAlign: 'left', paddingLeft: '30px' }}>
                  <SiCss3 className="tech-stack-logo" />
                  <SiHtml5 className="tech-stack-logo" />
                  <SiJavascript className="tech-stack-logo" />
                </div>
              </div>
            </Paper>
          </Grid>
          {/* project -3 ends */}

        </Grid>

      </div>
    </div>
  );
}

export default Project;
