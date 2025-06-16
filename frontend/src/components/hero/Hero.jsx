import React from "react";
import "./Hero.css";

function Hero() {
  const backendPortal = process.env.REACT_APP_BACKEND_PORTAL || "";
  const heroImgUrl = `${backendPortal}/images/YB-HERO.jpg`;
  let heroNewsImgUrl =
    `${backendPortal}/images/YB-NEWS.jpg`;
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
        <div className="hero-news" id="news">
          <h1 className="news-heading">
            Dynamic and Committed Educator with a Vision for Student Success
          </h1>
          <div className="news-desc">
            <div className="news-img">
              <img src={heroNewsImgUrl} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur assumenda eligendi alias voluptatibus neque nulla
                accusamus magnam reprehenderit delectus nam et velit, voluptate
                esse. Reiciendis labore eveniet doloribus quod aut.
              </p>
            </div>
            <div className="news-actual">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                error placeat voluptatibus et beatae commodi nisi accusantium
                quo eaque molestias odit dicta enim quasi nulla, amet expedita
                numquam cupiditate, dolorum ea minima tempora aliquam
                repudiandae adipisci! Voluptas esse maiores dolores in! Beatae
                quae quaerat fugit facere eveniet tempora sint nobis assumenda
                vitae odio nostrum ipsa, fugiat reprehenderit suscipit expedita
                autem? Beatae, sint cumque eligendi, accusantium soluta dolores
                atque quasi sunt possimus, animi officia nam asperiores! Quidem
                ut soluta sunt sequi facere, itaque ratione dicta qui blanditiis
                iste voluptates laudantium officia modi. Minus exercitationem
                velit sunt. Quam, quae, corporis quo itaque perferendis
                voluptate rem quasi deleniti labore minus aliquid consequuntur
                velit aut quia dolorum ad. In suscipit ullam quae quo maiores
                officia, harum, sed, nobis quaerat quibusdam eius hic quas
                laudantium molestias cupiditate magni eligendi? Quaerat
                consectetur est incidunt. Doloremque, at natus tenetur fugit
                officia placeat ad labore excepturi repellendus consequatur
                minus, laborum deserunt nostrum odio aut, cumque dolores debitis
                voluptatibus eligendi molestiae assumenda. Officia nesciunt
                aliquam eos ea tempore reprehenderit rem impedit velit culpa
                repudiandae laboriosam voluptates libero aliquid, nihil possimus
                voluptatum sed? Asperiores at mollitia quas ipsum rerum ullam
                laboriosam reprehenderit nihil! Accusamus cupiditate nulla nam!
                In velit possimus eum optio officiis? Illum suscipit iste
                laudantium eveniet perspiciatis ipsum impedit optio eaque
                quibusdam, corporis iure numquam. Ad dolore culpa molestiae
                nobis, esse nam odio, voluptatem vitae amet vero quas harum
                natus porro, voluptas rerum corporis deleniti? Natus vero in
                voluptas repudiandae ex, ut dicta provident nisi ad consequatur
                non suscipit, voluptatem eligendi aut ullam modi facere illo
                fugiat deleniti aliquam praesentium repellendus labore ducimus?
                Ab quia quae id? Illo, possimus? Vitae assumenda corrupti fugiat
                facere dicta et sed quia quae rem quibusdam voluptatibus
                expedita amet, quaerat alias officiis quidem distinctio quasi,
                nostrum, cum similique consequuntur natus. Dolore, velit
                commodi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
