import React from "react";
import "./Hero.css";

function Hero() {
  let heroImgUrl = process.env.REACT_APP_BACKEND_PORTAL + "/images/YB-HERO.jpg";
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-desc">
            <h1>
              ASSISTANT <span>PROFESSOR</span>
            </h1>
            <p>
              a <span className="vibrant">vibrant</span> educator with boundless
              energy and a contagious enthusiasm for teaching
            </p>
            <div className="hero-links">
              <a href="#">resume</a>
              <a href="#">get in touch</a>
            </div>
          </div>
          <div className="hero-img">
            <img src={heroImgUrl} alt="Hero" />
          </div>
        </div>
        <div className="hero-news">
          <h1>
            Dynamic and Committed Educator with a Vision for Student Success
          </h1>
          <p>
            As an enthusiastic and dedicated entry-level Assistant
            Professor, I aspire to bring an extroverted, dynamic approach to
            teaching and mentorship. My goal is to create an engaging and
            inclusive learning environment that fosters critical thinking,
            intellectual curiosity, and personal growth among students. With
            significant experience in organizing and managing various academic
            and extracurricular activities, I am well-prepared to take on
            administrative and coordination responsibilities with diligence and
            professionalism. I am committed to executing organizational tasks
            efficiently, ensuring that my contributions align with the
            expectations and goals of the institution. Guiding students toward
            holistic development is a cornerstone of my teaching philosophy.
            Beyond academic instruction, I am passionate about encouraging
            students to participate in constructive initiatives that promote
            creativity, teamwork, and leadership skills. By inspiring
            involvement in both curricular and extracurricular programs, I aim
            to cultivate well-rounded individuals who are prepared to excel in
            their chosen paths. I am eager to contribute my energy, expertise,
            and vision to the academic community, ensuring that my efforts lead
            to meaningful and lasting impacts on students, colleagues, and the
            institution as a whole.
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
