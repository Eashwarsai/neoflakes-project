import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
// import Header from "./Header"; // Assuming you have a Header component

function Player() {
  const navigate = useNavigate();
  const location = useLocation();
  const obj = location.state.obj.data;

  const playerContainerStyle = {
    position: "relative",
    width: "100%",
    // minHeight: "86vh", // Adjust height to ensure content is visible
    // backgroundColor: "#000",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center", // Center content horizontally
  };

  const backArrowStyle = {
    position: "absolute",
    top: "20px",
    left: "20px",
    fontSize: "30px",
    color: "white",
    cursor: "pointer",
    zIndex: 1, // Ensure the arrow is on top
  };

  const videoStyle = {
    width: "50%", // Set the video width to 50% of available screen width
    height: "auto",
    display: "block",
    marginBottom: "10px", // Add spacing below the video
  };

  const infoContainerStyle = {
    // backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: "20px",
    width: "100%",
    color: "black",
    zIndex: 1, // Ensure the info container is on top
  };

  const titleStyle = {
    margin: "0",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const descriptionStyle = {
    margin: "0",
    fontSize: "18px",
  };

  return (
    <div className="player-container" style={playerContainerStyle}>
      {/* <Header /> Header stays on top */}
      <BsArrowLeft style={backArrowStyle} onClick={() => navigate("/show")} />
      <video
        src={obj["videoobj"]["secure_url"]}
        autoPlay
        controls
        style={videoStyle}
      ></video>
      <div className="info-container" style={infoContainerStyle}>
        <h2 className="title" style={titleStyle}>
          {obj["title"]}
        </h2>
        <p className="description" style={descriptionStyle}>
          {obj["description"]}
        </p>
      </div>
    </div>
  );
}

export default Player;
