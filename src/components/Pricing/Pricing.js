import React, { useState } from "react";
import "./Pricing.css";

const Pricing = () => {
  const [field9Value, setField9Value] = useState("");
  const [field10Value, setField10Value] = useState("");
  const [field11Value, setField11Value] = useState("");

  const handleField9Change = (e) => {
    setField9Value(e.target.value);
  };

  const handleField10Change = (e) => {
    setField10Value(e.target.value);
  };
  const handleField11Change = (e) => {
    setField11Value(e.target.value);
  };

  return (
    <div className="formm-containerr">
      <h2>PRICING</h2>
      <form>
        <div className="side-by-side2">
          <div className="formm-fieldd">
            <label>PRICE:</label>
            <input
              type="number"
              value={field9Value}
              onChange={handleField9Change}
              placeholder="Product Price"
            />
          </div>

          <div className="formm-fieldd">
            <label>DISCOUNTED PRICE:</label>
            <input
              type="number"
              value={field10Value}
              onChange={handleField10Change}
              placeholder="Product Discounted Percentage"
            />
          </div>
        </div>

        <div className="formm-fieldd">
          <label>DISCOUNT PERCENTAGE:</label>
          <input
            type="number"
            value={field11Value}
            onChange={handleField11Change}
            placeholder="Product Discounted Percentage"
          />
        </div>
      </form>
    </div>
  );
};

export default Pricing;
