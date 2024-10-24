import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/kabee.png";
import emotion from "../../Assets/Projects/ecart.png";
import editor from "../../Assets/Projects/book.png";
import chatify from "../../Assets/Projects/tic.png";
import suicide from "../../Assets/Projects/cars.png";

function ProjectCard({ imgPath, title, description }) {
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center", // Centering content
    height: "100%",
    backgroundColor: "#2e2e2e",
    borderRadius: "10px",
    padding: "20px",
    color: "white",
    textAlign: "center", // Centering text
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const hoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.4)",
  };

  const imgStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "15px",
  };

  const titleStyle = {
    fontSize: "1.4rem", // Reduced to fit better
    marginBottom: "10px",
  };

  const descriptionStyle = {
    fontSize: "1rem",
    marginBottom: "15px",
    maxHeight: "80px", // Limits description height
    overflow: "hidden", // Ensures overflow is hidden
    textOverflow: "ellipsis", // Adds ellipsis for long descriptions
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => (e.currentTarget.style = { ...cardStyle, ...hoverStyle })}
      onMouseLeave={(e) => (e.currentTarget.style = cardStyle)}
    >
      <img src={imgPath} alt={title} style={imgStyle} />
      <h2 style={titleStyle}>{title}</h2>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
}

function Projects() {
  const rowStyle = {
    justifyContent: "center",
    paddingBottom: "10px",
  };

  return (
    <Container fluid className="project-section" style={{ paddingTop: "50px", paddingBottom: "50px" }}>
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ color: "white" }}>
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
        <Row style={rowStyle}>
        <Col md={4} className="project-card" style={{ marginBottom: "20px" }}>
            <ProjectCard
              imgPath={suicide}
              title="Rent-A-Car"
              description="A car rental platform for browsing, selecting, and renting vehicles effortlessly."
            />
          </Col>

          <Col md={4} className="project-card" style={{ marginBottom: "20px" }}>
            <ProjectCard
              imgPath={leaf}
              title="Skillera"
              description="A Learning Management System that offers seamless online education experiences."
            />
          </Col>



          <Col md={4} className="project-card" style={{ marginBottom: "20px" }}>
            <ProjectCard
              imgPath={chatify}
              title="Tic Tac Toe"
              description="A classic Tic Tac Toe game built with interactive features and a clean user interface."
            />
          </Col>

          <Col md={4} className="project-card" style={{ marginBottom: "20px" }}>
            <ProjectCard
              imgPath={editor}
              title="Book Store"
              description="A full-stack web application that allows users to browse, search, and purchase books."
            />
          </Col>

         
         

          <Col md={4} className="project-card" style={{ marginBottom: "20px" }}>
            <ProjectCard
              imgPath={emotion}
              title="E-commerce"
              description="A full-stack platform offering a smooth shopping experience with secure checkout."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
