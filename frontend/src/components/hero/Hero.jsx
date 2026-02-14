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
              a <span className="vibrant">vibrant</span> educator with boundless
              energy and a contagious enthusiasm for teaching
            </p>
            <div className="hero-links">
              <a href={heroResumeUrl} target="_blank">resume</a>
              <a href="mailto:ybharathirasul@gmail.com">get in touch</a>
            </div>
          </div>
          <div className="hero-img">
            <img src={heroImgUrl} alt="Hero" />
          </div>
        </div>
        <div className="hero-news" id="news">
          <h1 className="news-heading">
            Dynamic and Committed Educator with a Vision for Student Success
          </h1>
          <div className="news-desc">
            <div className="news-img">
              <img src={heroNewsImgUrl} alt="" />
              <p>
                Dr. Yasu Bharathi is an accomplished Assistant Professor of English with a passion for literary analysis, cultural studies, and innovative pedagogy. With expertise in postcolonial literature, contemporary Indian writing, and American literature, she brings a dynamic approach to English language education in South Indian institutions.
              </p>
            </div>
            <div className="news-actual">
              <p>
                Throughout her academic career, Dr. Bharathi has demonstrated exceptional commitment to student-centered learning and rigorous scholarship. Currently at Geetha Jeevan Arts & Science College in Thoothukudi, she teaches literature and language courses to over 200 undergraduate students while actively pursuing research in postcolonial discourse and cultural representation in literature.
              </p>
              <p>
                Her scholarly contributions include seven peer-reviewed publications in international journals, exploring themes of cultural identity, postcolonial perspectives, and the relevance of modernist literature in contemporary contexts. She is particularly interested in how literature serves as a medium for understanding diverse cultures and fostering critical thinking among students.
              </p>
              <p>
                As an educator, Dr. Bharathi advocates for innovative pedagogical approaches that encourage students to engage deeply with texts and develop strong analytical writing skills. She believes that literary education should not only impart knowledge but also cultivate empathy, cultural awareness, and the ability to question dominant narratives. Her mentorship has guided numerous students in pursuing research projects and publications of their own.
              </p>
              <p>
                Beyond classroom instruction, Dr. Bharathi actively contributes to curriculum development and academic discourse in her field. She has presented her research at national and international conferences, collaborated with colleagues on interdisciplinary projects, and served as a mentor for aspiring academics and writers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
