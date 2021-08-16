import React from "react";
import Skill from "../components/Skill";
import html from "../assets/img/icons/html.png";
import css from "../assets/img/icons/css.png";
import git from "../assets/img/icons/git.png";
import express from "../assets/img/icons/express.png";
import heroku from "../assets/img/icons/heroku.png";
import invision from "../assets/img/icons/invision.png";
import js from "../assets/img/icons/js.png";
import mongo from "../assets/img/icons/mongo.jpeg";
import node from "../assets/img/icons/node.png";
import postman from "../assets/img/icons/postman.png";
import react_native from "../assets/img/icons/react_native.tiff";
import react from "../assets/img/icons/react.png";
import sketch from "../assets/img/icons/sketch.png";

import ArrownDown from "./ArrowDown";
const Skills = ({ scroll }) => {
  return (
    <div className="second_block">
      <h1>Mes compétences</h1>
      <div className="skills">
        <Skill icon={html} titre="HTML 5" />
        <Skill icon={css} titre="CSS 3" />
        <Skill icon={js} titre="Javascript" />
        <Skill icon={node} titre="Node JS" />
        <Skill icon={react} titre="React" />
        <Skill icon={react} titre="React Native" />
        <Skill icon={heroku} titre="Heroku" />
        <Skill icon={mongo} titre="Mongo DB" />
        <Skill icon={postman} titre="Postman" />
        <Skill icon={git} titre="Git" />
        <ArrownDown scroll={scroll} />
      </div>
    </div>
  );
};

export default Skills;
