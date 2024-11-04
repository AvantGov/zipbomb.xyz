// depends 
import React from "react";


// css
import "../CSS/About.css";


const About = () => {

    return(
        <div className="About" id="About">
            <div className="About__leadeContainer">
                <h2 className="leadeContainer__title">About</h2>
                <p className="leadeContainer__copy">I'm baby poke waistcoat mukbang next level vinyl vaporware. Chillwave gastropub synth waistcoat quinoa sus tofu tacos pug distillery sustainable single-origin coffee. Waistcoat hammock hot chicken, iceland letterpress knausgaard poke cold-pressed twee succulents normcore. Shoreditch master cleanse tbh fit raw denim. Chartreuse cred raw denim sriracha messenger bag, distillery woke normcore hammock organic Brooklyn bicycle rights affogato gorpcore.</p>
            </div>
            <div className="About__pressContainer">
                <img className="pressContainer__img" src="bandphoto.jpg" />
                <div className="pressContainer__bulletContainer">
                    <ul className="bulletContainer__list">
                        <li className="list__listItem">
                            <a className="listItem__link" href="https://google.com/" target="_blank" rel="noopenner noreferrer">Electronic Press Kit (EPK)</a>
                        </li>

                        <li className="list__listItem">
                            <a className="listItem__link" href="https://google.com/" target="_blank" rel="noopenner noreferrer">zipbombband@gmail.com</a>
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