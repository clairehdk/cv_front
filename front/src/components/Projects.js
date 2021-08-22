import React, { useState } from "react";
import trip from "../assets/img/trip.png";
import trip_logo from "../assets/img/trip_logo.png";
import vinted from "../assets/img/vinted.png";
import vinted_logo from "../assets/img/vinted_logo.png";
import marvel from "../assets/img/marvel.png";
import marvel_logo from "../assets/img/marvel_logo.png";
import deliveroo from "../assets/img/deliveroo.png";
import deliveroo_logo from "../assets/img/deliveroo_logo.png";
import happycow from "../assets/img/happy_cow.png";
import happycow_logo from "../assets/img/happycow_logo.svg";
import Project from "./Project";
import git from "../assets/img/git.png";

const Projects = () => {
  return (
    <div className="projects">
      <div className="head">
        <h1>Mes projets</h1>
        <a href="https://github.com/clairehdk" target="_blank">
          <img className="git" src={git} alt="Git Hub" />
        </a>
      </div>
      <section className="all">
        <Project
          block_name="marvel"
          class_left="marvel_logo"
          left_img={marvel_logo}
          class_right="marvel_img"
          right_img={marvel}
          link="https://my-marvel-project.netlify.app/"
          title="Projet fullstack"
          description="Réalisation d'une réplique qui catalogue les comic books et les personnages marvel."
          video="https://res.cloudinary.com/dibnkdlfo/video/upload/v1629037581/CV/marvel_short_l9yvjk.mov"
        />
        <Project
          block_name="vinted"
          class_left="vinted_img"
          left_img={vinted}
          class_right="vinted_logo"
          right_img={vinted_logo}
          link="https://my-vinted-project.netlify.app/"
          title="Projet fullstack"
          description="Réalisation d'une réplique consistant en la vente de vêtements d'occasion."
          video="https://res.cloudinary.com/dibnkdlfo/video/upload/v1629037722/CV/vinted_short_a4qd1h.mov"
        />
        <Project
          block_name="marvel"
          class_left="trip_logo"
          left_img={happycow_logo}
          class_right="marvel_img"
          right_img={happycow}
          link="https://my-happycow-project.netlify.app/"
          title="Projet fullstack"
          description="Réalisation d'une réplique consistant en un service en ligne qui répertorie les sources d'aliments végétaliens, végétariens et sains."
          video="https://res.cloudinary.com/dibnkdlfo/video/upload/v1629037581/CV/marvel_short_l9yvjk.mov"
        />
        <Project
          block_name="vinted"
          class_left="vinted_img"
          left_img={trip}
          class_right="trip_logo"
          right_img={trip_logo}
          link="https://my-tripadvisor-project.netlify.app/"
          title="Projet front-end"
          description="Réalisation d'une réplique en site vitrine responsive."
          video="https://res.cloudinary.com/dibnkdlfo/video/upload/v1629037457/CV/trip_ubamgc.mov"
        />
        <Project
          block_name="marvel"
          class_left="trip_logo"
          left_img={deliveroo_logo}
          class_right="marvel_img"
          right_img={deliveroo}
          link="https://my-deliveroo-project.netlify.app/"
          title="Projet fullstack"
          description="Réalisation d'un site de présentation permettant de séléctionner des plats et de les intégrer à un panier."
          video="https://res.cloudinary.com/dibnkdlfo/video/upload/v1629037448/CV/deliveroo_nyavyu.mov"
        />
      </section>
    </div>
  );
};

export default Projects;
