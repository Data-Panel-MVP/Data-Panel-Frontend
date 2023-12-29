// FormComponent.js
import React, { useState } from "react";
import "./Filter.css";

const Filter = () => {
  const [field6Value, setField6Value] = useState("");
  const [field7Value, setField7Value] = useState("");
  const [field8Value, setField8Value] = useState("");

  const handleField6Change = (e) => {
    setField6Value(e.target.value);
  };

  const handleField7Change = (e) => {
    setField7Value(e.target.value);
  };

  const handleDropdownChange = (selectedValue) => {
    setField8Value(selectedValue);
  };

  return (
    <div className="form-containerr">
      <h2>FILTERS</h2>
      <form>
        <div className="side-by-side1">
          <div className="form-fieldd">
            <label>SIZE:</label>
            <input
              type="text"
              value={field6Value}
              onChange={handleField6Change}
              placeholder="Product Size"
            />
          </div>

          <div className="form-fieldd">
            <label>THICKNESS:</label>
            <input
              type="text"
              value={field7Value}
              onChange={handleField7Change}
              placeholder="Product Thickness"
            />
          </div>
        </div>

        <div className="form-fieldd">
          <label>COLOR:</label>
          <select
            value={field8Value}
            onChange={(e) => handleDropdownChange(e.target.value)}
          >
            <option value="">Product Color</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filter;
