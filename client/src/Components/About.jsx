// depends 
import React from "react";


// css
import "../CSS/About.css";


const About = () => {

    return(
        <div className="About" id="About">
            <div className="About__leadeContainer">
                <h2 className="leadeContainer__title">About</h2>
                <p className="leadeContainer__copy">Like the malicious archive file their name is lifted from, .zipbomb is a five-piece from the midwest pushing songs ready to explode when opened. The group injects a modern fury into the early-oughts-metalcore-hardcore framework, delivering a sonic assult that feels nostalgic and progressive in parallel.</p>
                <p className="leadeContainer__copy">FFO: 7 Angels 7 Plagues, Poison The Well, Vein.fm, Converge</p>
                <p className="leadeContainer__copy">Hear debut release V.A.A.S (Violence As A Service) at the links above. Reach out at the email below for booking and press inquiries.</p>
            </div>
            <div className="About__pressContainer">
                <img className="pressContainer__img" src="bandphoto.jpg" />
                <div className="pressContainer__bulletContainer">
                    <ul className="bulletContainer__list">
                        {/* <li className="list__listItem">
                            <a className="listItem__link" href="https://google.com/" target="_blank" rel="noopenner noreferrer">Electronic Press Kit (EPK)</a>
                        </li> */}

                        <li className="list__listItem">
                            <a className="listItem__link" href="mailto:zipbombband@gmail.com" target="_blank" rel="noopenner noreferrer">zipbombband@gmail.com</a>
                        </li>

                        <li className="list__listItem">
                            <a className="listItem__link" href="https://donate.wikimedia.org/wiki/Ways_to_Give" target="_blank" rel="noopenner noreferrer">donate to wikimedia foundation</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default About;