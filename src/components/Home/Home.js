import React from "react";
import Particle from "../Particle";
import Type from "./Type";
import computer from "../../Assets/computer.png";
import back from "../../Assets/IMG_1021.JPG";
import "./home.css"

function Home() {
  return (
    <section className="home-section" id="home">
            <Particle />
      <div>
        < div className="home-container">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi!{" "}

              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Yohan Kanishka</strong>
              </h1>

              <div style={{ padding: 5, textAlign: "left" }}>
                <Type />
              </div>
              <p>I’m a hardworking, enthusiastic and a self - 
                efficient individual with an updated <br></br> Knowledge 
                who a keen armature is looking forward to being
                employed in a reputed organization. I always 
                want to fulfil <br></br> a given task into the best way 
                possible with the fullest cooperation and 
                concentration. As well <br></br> I’m self-motivated and 
                keen on experiencing in a formal environment 
                where I can enhance my professional</p>

                <h1 className="computer"><span className="wave" role="img" aria-labelledby="wave">
                <img src={computer} alt="about" className="computer-img" />
                </span></h1>
        </div>


        <div className="mobile-image">
        <img src={back} alt="about" className="back-img" />

        </div>
      </div>

    </section>
    
    
  );
}

export default Home;
