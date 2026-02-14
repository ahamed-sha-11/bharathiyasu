import React from "react";
import "./Hero.css";

function Hero() {
  const heroImgUrl = "/YB-HERO.jpg";
  const heroResumeUrl = "/docs/resume.pdf";
  let heroNewsImgUrl = "/YB-NEWS.jpg";
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-desc">
            <h1>
              ASSISTANT <span>PROFESSOR</span>
            </h1>
            <p>
              a <span className="vibrant">visionary</span> educator with expertise in higher education, research, and innovative digital learning platforms
            </p>
            <div className="hero-links">
              <a href={heroResumeUrl} target="_blank">resume</a>
              <a href="mailto:drvyassubharathi@gmail.com">get in touch</a>
            </div>
          </div>
          <div className="hero-img">
            <img src={heroImgUrl} alt="Hero" />
          </div>
        </div>
        <div className="hero-news" id="news">
          <h1 className="news-heading">
            Dedicated Scholar Pioneering Excellence in English Education and Research
          </h1>
          <div className="news-desc">
            <div className="news-img">
              <img src={heroNewsImgUrl} alt="" />
              <p>
                Dr. Yasu Bharathi is an accomplished Assistant Professor of English with over 4 years of experience across higher education, curriculum development, educational technology integration, and literary studies. Based in Chennai, India, he brings a dynamic and research-driven approach to English language education, combining rigorous scholarship with innovative pedagogical methodologies.
              </p>
            </div>
            <div className="news-actual">
              <p>
                As a dedicated scholar and educator, Dr. Bharathi specializes in curriculum design, English language lab management, and digital learning platforms including ORALL & GLOBARINA. His expertise spans postcolonial literature, contemporary Indian writing, and American literature, with a particular focus on making literary analysis accessible and engaging to students through contemporary teaching methods.
              </p>
              <p>
                Dr. Bharathi's research contributions are substantial and internationally recognized. He has published 3 Scopus-indexed research papers and multiple UGC-approved peer-reviewed articles in national and international journals, exploring themes of cultural identity, literary analysis, and pedagogical innovation. His scholarly work extends to 5 book chapters published across reputed international publishers including Cambridge Scholars and Pacific Books International, demonstrating his authority in the field of English literary studies.
              </p>
              <p>
                Beyond traditional academia, Dr. Bharathi is an accomplished innovator holding 3 patents related to English language learning devices and instructional methodologies. He serves as Editor/Associate Editor for 3 academic volumes, has delivered 13+ invited lectures and keynotes across leading institutions, and has held leadership roles as Resource Person, Guest Lecturer, Social Media Coordinator, and Mentor for both undergraduate and postgraduate learners.
              </p>
              <p>
                Currently, Dr. Bharathi leads institutional initiatives including the English Literary Association (ELA), where he conceptualizes and executes literary events, workshops, and guest lectures. He is passionate about fostering institutional research ecosystems, mentoring aspiring scholars, and bridging the gap between classical literary traditions and contemporary digital learning, making him a catalyst for academic excellence and student empowerment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
