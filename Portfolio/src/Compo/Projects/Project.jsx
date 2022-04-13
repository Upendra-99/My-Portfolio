import React from "react";
import "./Project.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import travel from "../../images/Travelista.png";
import wa from "../../images/wa.gif";
import { FaCss3Alt, FaReact, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { DiMongodb, DiFirebase } from "react-icons/di";
import { SiRedux, SiMaterialUi } from "react-icons/si";

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
                  <IoLogoCss3 style={{ color: "#475569", fontSize: "40px" }} />
                  <IoLogoJavascript style={{ color: "#475569", fontSize: "40px" }} />
                  <FaHtml5 style={{ color: "#475569", fontSize: "40px" }} />
                </div>
              </div>
            </Paper>
          </Grid>

        </Grid>
      </div>
    </div>
  );
}

export default Project;
