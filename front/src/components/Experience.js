import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = ({ scroll }) => {
  return (
    <div className="third_block">
      <h1>Mes expériences</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  black" }}
          date="MARS 2021 - JUIN 2021"
          iconStyle={{ background: "#3AA6A3", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title right">
            Formation développeur web et mobile Javascript
          </h3>
          <h4 className="vertical-timeline-element-subtitle right">
            Le Réacteur
          </h4>
          {/* <p className="right">Apprentissage de React et React Native</p>
          <p className="right">Notions de backend</p> */}
          <p className="right">
            Obtention du certificat "Développement de site web et d'application
            mobile"
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentArrowStyle={{ borderRight: "7px solid  black" }}
          className="vertical-timeline-element--work"
          date="JANVIER 2020 - DECEMBRE 2020"
          iconStyle={{ background: "#3AA6A3", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title left">
            Voyage en Asie du sud-est
          </h3>
          <h4 className="vertical-timeline-element-subtitle left">
            Développement d'une application mettant en relation les locaux avec
            les voyageurs
          </h4>
          <p className="left">Gestion du côté métier de l'application</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentArrowStyle={{ borderRight: "7px solid  black" }}
          className="vertical-timeline-element--work"
          date="SEPTEMBRE 2018 - NOVEMBRE 2019"
          iconStyle={{ background: "#3AA6A3", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title right">
            Product Owner Junior
          </h3>
          <h4 className="vertical-timeline-element-subtitle right">
            Uppli, Paris
          </h4>
          <p className="right">
            Coordination de l’équipe de développement et de l’équipe UX/UI
          </p>
          <p className="right">
            Gestion des sprints et mise en place/animation des cérémonies agiles
          </p>
          <p className="right">
            Priorisation du product backlog et écriture des user stories
          </p>
          <p className="right">Réalisation des tests fonctionnels</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentArrowStyle={{ borderRight: "7px solid  black" }}
          className="vertical-timeline-element--work"
          date="JANVIER 2018 - JUILLET 2018"
          iconStyle={{ background: "#3AA6A3", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title left">
            Stage de fin d'études - Product Owner
          </h3>
          <h4 className="vertical-timeline-element-subtitle left">
            Uppli, Paris
          </h4>
          <p>Apprentissage du métier de Product Owner</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentArrowStyle={{ borderRight: "7px solid  black" }}
          className="vertical-timeline-element--work"
          date="FEVRIER 2016 - JUILLET 2016"
          iconStyle={{ background: "#3AA6A3", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title right">
            Stage de 3ème année - Chef de projet digital
          </h3>
          <h4 className="vertical-timeline-element-subtitle right">
            Compos Juliot, Paris
          </h4>
          <p className="right">
            Etude du brief client en relation avec le service commercial
          </p>
          <p className="right">Coordination des équipes de production</p>
          <p className="right">Gestion du planning</p>
          <p className="right">Relation client</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentArrowStyle={{ borderRight: "7px solid  black" }}
          className="vertical-timeline-element--work"
          date="SEPTEMBRE 2013 - JUILLET 2018"
          iconStyle={{ background: "#3AA6A3", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title left">
            Institut de l'Internet et du Multimédia
          </h3>
          <h4 className="vertical-timeline-element-subtitle left">
            Spécialisation web
          </h4>
          <p>Obtention du mastère "Manager de la communication numérique"</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
