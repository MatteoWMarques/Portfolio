import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link
import { dataabout, meta, skills, highlights, resume } from "../../EDIT_THIS_FILE.js";

export const About = () => {
  const resumePath = "/" + resume;

  // Function to handle resume download
  const handleDownload = () => {
    // Fetch the resume file
    fetch(resume)
      .then((response) => response.blob())
      .then((blob) => {
        // Create a temporary link element
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "resume.pdf"); // Set the download attribute
        // Trigger the click event to start downloading
        document.body.appendChild(link);
        link.click();
        // Clean up
        link.parentNode.removeChild(link);
      })
      .catch((error) => {
        console.error("Error downloading the resume:", error);
      });

    window.open("/" + resume);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        {/* <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => (
              <div key={i}>
                <h3 className="progress-title">{data.name}</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${data.value}%`,
                    }}
                  >
                    <div className="progress-value">{data.value}%</div>
                  </div>
                </div>
              </div>
            ))}
          </Col>
        </Row>*/}
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Highlights</h3>
          </Col>
          <Col lg="7">
            {highlights.map((data, i) => (
              <div className="service_ py-4" key={i}>
                <h5 className="service__title">{data.title}</h5>
                <p className="service_desc">{data.description}</p>
              </div>
            ))}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Resume</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            {/* Use Link component to navigate to the Resume page */}
            <Link to={resumePath} className="text_2">
              <div id="button_p" className="ac_btn btn" onClick={handleDownload}>
                My Resume
                <div className="ring one"></div>
                <div className="ring two"></div>
                <div className="ring three"></div>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
