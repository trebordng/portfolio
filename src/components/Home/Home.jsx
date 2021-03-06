import React, { useState } from "react";
import "./Home.css";
import Popup from "./Popup";
import Radium, { StyleRoot } from "radium";
import { fadeIn } from "react-animations";
import Navigation from "../Navigation/Navigation";
import Professional from "../Professional/Professional";
import EducationAndExperience from "../Education/EducationAndExperience";
import Contact from "../Contact/Contact";
import Footer from "../Navigation/Footer";
import Reveal from 'react-reveal/Reveal';
import { useParams } from 'react-router-dom';

const styles = {
  fadeIn: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};
function Home() {
  const [buttonPopup, setButtonPopup] = useState(false);
  let params= useParams();
  console.log(params);
  return (
    <StyleRoot>
      <div style={styles.fadeIn}>
        <div className="home" id="homeLink">
          <div className="stickyNav">
            <Navigation />
          </div>

          <div className="introduction">
            <h1 className="introductionText">
              I<span className="dot">'</span>m
            </h1>
            <h1 className="introductionText">Robert Tran</h1>
            <br></br>
            <div className="buttonText">
              <div>
                <h1 className="introductionSubText">UX/UI Designer & Web</h1>
                <h1 className="introductionSubText">Developer</h1>
              </div>
              <div>
                <button
                  className="moreButton"
                  onClick={() => setButtonPopup(true)}
                >
                  <span>More</span>
                </button>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                  <StyleRoot>
                    <div className="popupText" style={styles.fadeIn}>
                      <h1>Robert (Nguyen) Tran </h1>
                      <p>
                        A post-graduate IT developer with a bachelor
                        certification in Information Technology from QUT.
                        Skillful in HTML, CSS, JavaScript, React, managing and
                        maintaining data server. To me, one of the most
                        important components when working with website is making
                        it responsive.
                      </p>
                    </div>
                  </StyleRoot>
                </Popup>
              </div>
            </div>
          </div>
          <Reveal>
          <div id="professionalLink">
            <Professional />
          </div>
          
          <div id="educationAndExperienceLink">
            <EducationAndExperience />
          </div>
          <div id="contactLink">
            <Contact />
          </div>
          <Footer />
          </Reveal>
        </div>
      </div>
    </StyleRoot>
  );
}

export default Home;
