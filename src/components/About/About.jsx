import React from "react";
import "./About.scss";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      {/* {console.log(multiply())} */}
      <Link to="/" className="about__back">
        <span>Home</span>
        <i className="fas fa-arrow-left"></i>
      </Link>
      <div className="about__title">
        <div className="about__titleDiv"></div>
        About Us
        <div className="about__titleDiv"></div>
      </div>
      <div className="about__content">
        <p className="about__contentP">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
          voluptatibus atque quod nostrum sint perspiciatis, optio, expedita
          aperiam asperiores nulla nesciunt ratione eveniet pariatur incidunt.
          Dolorum saepe iure cumque officia dolores debitis necessitatibus cum
          consectetur ratione provident, ab incidunt mollitia eaque laudantium
          minus accusantium minima voluptatem non nesciunt earum doloribus
          facilis praesentium corporis officiis. Similique ipsa ad, cumque
          recusandae at molestias eligendi magni eveniet quod quasi? Iure
          aspernatur soluta excepturi maxime suscipit expedita rerum, quis
          asperiores ex ipsa inventore ullam consequatur enim sint, vero, iusto
          cum. Asperiores nam omnis minus. Et id iusto exercitationem
          voluptatem, praesentium corporis sequi fugiat. Et?
        </p>
        <p className="about__contentP">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          eveniet. Nesciunt animi perspiciatis eos voluptas ratione doloribus
          illum cupiditate illo quo fugiat suscipit recusandae molestias
          pariatur, deleniti autem amet unde incidunt, quia debitis. Rem facilis
          tenetur excepturi enim, iste nobis odio quos quis aperiam
          exercitationem nostrum tempora quod nisi, ad voluptates? Minus
          asperiores, corporis magni sunt dicta eum distinctio eius ab
          veritatis, similique incidunt dolore id quidem illum doloremque
          voluptas molestiae nulla mollitia vero delectus! Eveniet totam
          tenetur, laborum esse officia nisi modi ex consectetur eos deleniti
          libero quas delectus maiores et quia obcaecati suscipit quos? Eligendi
          voluptate ullam nisi recusandae possimus architecto, illum ratione
          non, expedita nemo maxime quisquam distinctio accusamus soluta
          laboriosam porro nesciunt consequatur obcaecati. Atque, quas
          asperiores repudiandae nisi, maiores voluptates beatae perspiciatis ex
          deserunt similique obcaecati omnis aut inventore culpa illum.
          Assumenda, ullam! In aut obcaecati nam quod saepe quas dolorem
          quibusdam accusantium consectetur omnis?
        </p>
      </div>
      <div className="about__footer">
        <p>Design by Jacob Whisler | 2021</p>
      </div>
    </div>
  );
};

export default About;
