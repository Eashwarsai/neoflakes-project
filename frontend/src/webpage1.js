import React, { useState } from "react";
import axios from "axios";
import Header from "./header";
const AttractiveForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imageobj, setImageobj] = useState(null);
  const [video, setVideo] = useState(null);
  const [iupload, setIupload] = useState(false)
  const [vupload, setVupload] = useState(false)
  const [videoobj, setVideoobj] = useState(null);
  // const [transfer, setTransfer] = useState()
  const handleSubmit = async(e) => {
    e.preventDefault();
    // if (!(image && title && video && description)) return;
    await handleVideoUpload(video);
    await handleImageUpload(image);
    // Add your form submission logic here
    // setImageobj({ "a": "b" });
    // setVideoobj({ "a": "b" });
    // await axios.get("http://localhost:8009/upload");
    try {
      
      const response = await axios.post("https://neoflakes-api.onrender.com/upload", {
        title,
        description,
        imageobj,
        videoobj,
      });
      console.log("Item saved:", response.data);
    } catch (error) {
      console.error("Error saving item:", error);
    }
    console.log("Form submitted:", { title, description });
  };
const handleImageUpload = async () => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "neoflake1");

  try {
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dfxp1c2xg/image/upload",
      formData
    );
    // Handle success: response.data contains image URL
    setImageobj(response.data)
    console.log("Image uploaded:", response.data.secure_url);
  } catch (error) {
    // Handle error
    console.error("Image upload error:", error);
  }
};
const handleVideoUpload = async () => {
  const formData = new FormData();
  formData.append("file", video);
  formData.append("upload_preset", "neoflake1");

  try {
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dfxp1c2xg/video/upload",
      formData
    );
    // Handle success: response.data contains image URL
    setVideoobj(response.data)
    console.log("video uploaded:", response.data.secure_url);
  } catch (error) {
    // Handle error
    console.error("video upload error:", error);
  }
};
  const formStyle = {
    width: "400px",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "white",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    fontSize: "16px",
  };

  const textareaStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "white",
    resize: "vertical",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    fontSize: "16px",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };
  const filestyling = {
    padding :"10px"
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2%",
        minHeight: "100%",
      }}
    >
      <form style={formStyle} onSubmit={handleSubmit}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Upload Video and Image
        </h1>
        <label
          htmlFor="title"
          style={{ fontWeight: "bold", marginBottom: "5px" }}
        >
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={50}
          style={inputStyle}
          required
        />
        <label
          htmlFor="description"
          style={{ fontWeight: "bold", marginBottom: "5px" }}
        >
          Description:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={200}
          rows={4}
          style={textareaStyle}
          required
        />
        <div style={filestyling}>
          <label
            htmlFor="uploadimage"
            style={{ fontWeight: "bold", marginBottom: "5px" }}
          >
            Upload Thumbnail (Image):
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <button
            value="upload image"
            // onClick={handleImageUpload()}
            style={buttonStyle}
          >upload</button>
        </div>
        <div style={filestyling}>
          <label
            htmlFor="uploadvideo"
            style={{ fontWeight: "bold", marginBottom: "5px" }}
          >
            Upload Video (video):
          </label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
          />
          <button
            value="upload video"
            // onClick={handleVideoUpload()}
            style={buttonStyle}
          >upload</button>
        </div>
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AttractiveForm;
