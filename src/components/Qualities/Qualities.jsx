import React from "react";
import "./Qualities.css";
import section from "../../constants/data";
import images from "../../constants/images";

const Qualities = () => {
  return (
    <section className="qualities section-p bg-md-black" id="qualities">
      <div className="container">
        <div className="qualities-content grid">
          <div className="content-left">
            <div className="section-t">
              <h3>We are Professionals</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                aut qui natus officia pariatur repudiandae, aliquid nam
                explicabo velit officiis earum. Et aliquid voluptas recusandae!
              </p>
            </div>
            <div className="item-list grid text-white">
              {section.qualities.map((quality) => {
                return (
                  <div className="item flex" key={quality.id}>
                    <div className="item-icon flex flex-center">
                      {quality.icon}
                    </div>
                    <div className="item-text">
                      <h3 className="item-title fs-25">Ideas & Plans</h3>
                      <p className="text">{quality.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="content-right">
            <img src={images.professionals_main_img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualities;
