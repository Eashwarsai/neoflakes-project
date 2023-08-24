import React, { useState, useEffect } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
const MediaList = () => {
  const [mediaList, setMediaList] = useState([]);
    const navigate = useNavigate();
  useEffect(() => {
    // Simulating fetching data from an API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://neoflakes-api.onrender.com/show"
        ); // Replace with your API endpoint
        // const data = await response.json();
        //   console.log(response.data)
        setMediaList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const mediaContainerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "20px",
    
  };

  const mediaItemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
    border: "2px solid black",
    margin:"2px",
  };

  const imageStyle = {
    width: "100px", // Adjust image width as needed
    height: "100px", // Adjust image height as needed
    borderRadius: "50%",
    objectFit: "cover",
  };

  const titleStyle = {
    marginTop: "8px",
    fontSize: "14px",
  };

  return (
    <div style={mediaContainerStyle}>
      {mediaList.map((data) => (
        <Link
              to="/player"
              state={{obj:{data}}}
          style={{ textDecoration: "none" }}
        >
          <div style={mediaItemStyle}>
            <img
              src={data["imageobj"]["secure_url"]}
              alt={"image"}
              style={imageStyle}
            />
            <div style={titleStyle}>{data.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MediaList;
