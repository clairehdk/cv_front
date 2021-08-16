import HoverVideoPlayer from "react-hover-video-player";

const Project = ({
  class_left,
  class_right,
  left_img,
  right_img,
  block_name,
  link,
  title,
  description,
  video,
}) => {
  return (
    <a href={link} target="_blank">
      <div className={block_name}>
        <div className="left_block">
          <div
            className={
              class_left === "marvel_logo" || class_left === "trip_logo"
                ? "hidden"
                : "display"
            }
          >
            <div className="video">
              <HoverVideoPlayer
                videoSrc={video}
                pausedOverlay={
                  <img
                    src={left_img}
                    alt="video marvel"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                loadingOverlay={<div className="loading-spinner-overlay" />}
              />
            </div>
          </div>
          <div
            className={
              class_left === "marvel_logo" || class_left === "trip_logo"
                ? "display"
                : "hidden"
            }
          >
            <img className={class_left} src={left_img} />
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="right_block">
          <div className={class_left === "vinted_img" ? "hidden" : "display"}>
            <div className="video">
              <HoverVideoPlayer
                videoSrc={video}
                pausedOverlay={
                  <img
                    src={right_img}
                    alt="video marvel"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                    }}
                  />
                }
                loadingOverlay={<div className="loading-spinner-overlay" />}
              />
            </div>
          </div>
          <div className={class_left === "vinted_img" ? "display" : "hidden"}>
            <img className={class_right} src={right_img} />
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Project;
