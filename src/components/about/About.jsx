import React from "react";
import "./about.css";
import AboutImg from "../../assets/image.jpg";
import CV from "../../assets/CV-eng.pdf";
import Info from "./Info";
import File from "../icons/File";

function About() {
	return (
		<section className="about section" id="about">
			<h2 className="section__title">About Me</h2>
			<span className="section__subtitle">My introduction</span>

			<div className="about__container container grid">
				<img src={AboutImg} alt="" className="about__img" />

				<div className="about__data">
					<Info />

					<p className="about__description">
						Frontend developer, I create web pages with user interface, I have a
						little experience, all clients are happy with the completed
						projects.
                    </p>
                    
                    <a download='' href={CV} className="button button--flex">Download CV
                    <span style={{margin: '5px 0 0 5px'}}><File/></span>
                    </a>
				</div>
			</div>
		</section>
	);
}

export default About;
