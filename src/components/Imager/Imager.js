import React, { useState } from "react";
import "./Imager.css";
import Upload from "./upload.png";

const Imager = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePlusButtonClick = () => {
    setShowPopup(true);
  };

  const handleUploadButtonClick = () => {
    alert("Image uploaded!");
    setShowPopup(false);
  };

  return (
    <div className="form1container">
      <h2>IMAGE</h2>
      <div className="side-by-side5">
        <button className="plusButton" onClick={handlePlusButtonClick}>
          +
        </button>
        <button className="plusButton" onClick={handlePlusButtonClick}>
          +
        </button>
        <button className="plusButton" onClick={handlePlusButtonClick}>
          +
        </button>
        <button className="plusButton" onClick={handlePlusButtonClick}>
          +
        </button>
        <button className="plusButton" onClick={handlePlusButtonClick}>
          +
        </button>
      </div>
      {showPopup && (
        <div className="popup">
          <button className="closeButton" onClick={() => setShowPopup(false)}>
            X
          </button>
          <h2>Upload Image</h2>
          <div className="pop-con">
            <img src={Upload} />
            <input type="file" accept="image/*" />
          </div>
          <button className="uploadButton" onClick={handleUploadButtonClick}>
            Upload
          </button>
        </div>
      )}
    </div>
  );
};

export default Imager;
