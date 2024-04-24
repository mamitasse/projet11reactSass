import React from "react";
import BannerAbout from "../../assets/BannerAbout.png";
import LayoutAbout from "../../components/Layout";


const About = () => {
  return (
    <main className="main_about">
     
      <article className="banner-apropos">
        <img className="banner-apropos_img" src={BannerAbout} alt="paysage montagne" />
      </article>
      <LayoutAbout />
    </main>
  );
};

export default About;
