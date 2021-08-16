const Timeline = ({ className, title, subtitle, description }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  black" }}
      date="MARS 2021 - JUIN 2021"
      iconStyle={{ background: "#3AA6A3", color: "#fff" }}
    >
      <h3 className="vertical-timeline-element-title">
        Formation développeur web et mobile Javascript
      </h3>
      <h4 className="vertical-timeline-element-subtitle">Le Réacteur</h4>
      <p className="right">Apprentissage de React et React Native</p>
      <p className="right">Notions de backend</p>
    </VerticalTimelineElement>
  );
};

export default Timeline;
