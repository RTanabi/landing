import React from "react";
import "./About.css";
import images from "../../constants/images";

const About = () => {
  return (
    <section className="about section-p bg-dark" id="about">
      <div className="container">
        <div className="about-content grid text-center">
          <div className="content-left">
            <img src={images.about_main_img} alt="" />
          </div>
          <div className="content-right">
            <div className="section-t">
              <h3>About Us</h3>
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              eligendi. Natus iste commodi corrupti maxime iusto voluptatibus
              maiores veniam accusantium doloribus? Vero corporis aut, sequi
              laboriosam praesentium officia explicabo! Aperiam, voluptates
              aspernatur provident expedita accusamus, odio doloribus nostrum
              earum, atque nobis officia sit tempora pariatur ipsa reiciendis
              corrupti nam a?
            </p>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
              molestias ipsum alias quisquam doloremque quis porro amet eius,
              magni tempore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
