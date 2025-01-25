import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import logoImg from "../assets/img/logo.png";
import haneyBottleImg from "../assets/img/haney-bottle2.jpeg";
import gestureImg from "../assets/img/gesture.webp";
import battleshipImg from "../assets/img/battleship.jpeg";
import guizImg from "../assets/img/quiz.png";
import industryImg from "../assets/img/industry.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "BloomBright",
      description: "BloomBright is a mobile app designed to support women in tracking their menstrual cycles and maintaining overall health.",
      imgUrl: logoImg,
      link: "/view-project"
    },
    {
      title: "HiveToHome",
      description: "HiveToHome connects honey enthusiasts with high-quality honey products straight from the hive to their homes.",
      imgUrl: haneyBottleImg,
      link: "/view-project"
    },
    {
      title: "Gesture Detection Project",
      description: "The Gesture Detection project uses computer vision and machine learning techniques for recognizing gestures.",
      imgUrl: gestureImg,
      link: "/view-project"
    },
    {
      title: "Ships-On-Fire",
      description: "A Python game based on the classic Battleship game, with a grid system and tactical gameplay.",
      imgUrl: battleshipImg,
      link: "/view-project"
    },
    {
      title: "Brain-Teasers-Galore",
      description: "A Python program using Tkinter to generate unique quizzes on US state capitals.",
      imgUrl: guizImg,
      link: "/view-project"
    },
    {
      title: "IndustriaHub",
      description: "IndustriaHub provides knowledge on establishing unique, sustainable industries that are efficient compared to current ones.",
      imgUrl: industryImg,
      link: "/view-project"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore some of the projects I have worked on, showcasing a range of skills and technologies I have mastered.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.imgUrl}
                                link={project.link}
                                className="project-img"
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
}