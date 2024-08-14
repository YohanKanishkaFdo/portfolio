import ImageSlider from "./ImageSlider";
import photographyu from "../../Assets/Projects/5.png"
import salary from "../../Assets/Projects/1.png"
import payrol from "../../Assets/Projects/2.png"
import car from "../../Assets/Projects/4.png"
import Particle from "../Particle";
import './project.css'



const Projects = () => {
  const slides = [
    { url: require("../../Assets/husma/Thiragama event/1.jpg"), title: "beach" },
    { url: require("../../Assets/husma/Thiragama event/2.jpg"), title: "beach" },
    { url: require("../../Assets/husma/Thiragama event/3.jpg"), title: "beach" },
    { url: require("../../Assets/husma/Thiragama event/4.jpg"), title: "beach" },
    { url: require("../../Assets/husma/Thiragama event/5.jpg"), title: "beach" },
    { url: require("../../Assets/husma/Thiragama event/6.jpg"), title: "beach" },
    { url: require("../../Assets/husma/Thiragama event/7.jpg"), title: "beach" },
    { url: require("../../Assets/husma/Thiragama event/8.jpg"), title: "beach" },
    { url: require("../../Assets/husma/Thiragama event/9.jpg"), title: "beach" },
    { url: require("../../Assets/husma/Thiragama event/10.jpg"), title: "beach" },
    { url: require("../../Assets/husma/Thiragama event/11.jpg"), title: "beach" },
    { url: require("../../Assets/husma/Thiragama event/12.jpg"), title: "beach" },
    { url: require("../../Assets/husma/Thiragama event/13.jpg"), title: "beach" },

  ];
  const slide = [
    { url: require("../../Assets/association/1.JPG"), title: "beach" },
    { url: require("../../Assets/association/4.JPG"), title: "beach" },
    { url: require("../../Assets/association/5.JPG"), title: "beach" },
    { url: require("../../Assets/association/6.JPG"), title: "beach" },
    
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div className="project">
            <Particle />
      <h1 className="project-heading">Social <strong className="purple">Project </strong></h1>
          <div className="project-sosial">
            <div className="contand">
              <h1>Thiragama Maha Vidyalaya</h1>
              <p>lorem</p>
            </div>
            <div style={containerStyles} className="slider">
              <ImageSlider slides={slides} />
            </div>
          </div>
          <div className="project-sosial">
            <div className="contand">
              <h1>President Of Student Association</h1>
            </div>
            <div style={containerStyles} className="slider">
              <ImageSlider slides={slide} />
            </div>
          </div>

          <div className="web-project">
          <h1 className="project-heading">
          <strong className="purple">Software</strong> Project</h1>

            <div className="topic">
              <h1>Web Project</h1>
            </div>
            <div className="project-card">
              <div className="p-card">
              <img src={photographyu} alt="about" className="project-photo"  />
              <h1>Photographer’s Website </h1>
              </div>
              <div className="p-card">
              <img src={car} alt="about" className="project-photo"  />

                <h1>Rent a cae system</h1>
              </div>
            </div>
            
            <div className="topic">
              <h1>Desktop Project</h1>
            </div>
            <div className="project-card">
              <div className="p-card">
              <img src={salary} alt="about" className="project-photo"  />
                <h1>Salary management system</h1>
              </div>
              <div className="p-card">
              <img src={payrol} alt="about" className="project-photo"  />

                <h1>Payroll System</h1>
              </div>
            </div>
          </div>

    </div>

    

  );
};

export default Projects;
