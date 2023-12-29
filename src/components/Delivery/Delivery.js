import React, { useState } from "react";
import "./Delivery.css";

const Delivery = () => {
  const [field12Value, setField12Value] = useState("");
  const [field13Value, setField13Value] = useState("");
  const [field14Value, setField14Value] = useState("");
  const [field15Value, setField15Value] = useState("");

  const handleDropdown12Change = (selectedValue) => {
    setField12Value(selectedValue);
  };

  const handleDropdown13Change = (selectedValue) => {
    setField13Value(selectedValue);
  };

  const handleDropdown14Change = (selectedValue) => {
    setField14Value(selectedValue);
  };

  const handleDropdown15Change = (selectedValue) => {
    setField15Value(selectedValue);
  };

  return (
    <div className="formm-containerrr">
      <h2>DELIVERY CALCULATIONS</h2>
      <form>
        <div className="side-by-side3">
          <div className="formm-fielddd">
            <label>APPLICABILITY:</label>
            <select
              value={field12Value}
              onChange={(e) => handleDropdown12Change(e.target.value)}
            >
              <option value="">Product Applicability</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>

          <div className="formm-fielddd">
            <label>PLYUNIT:</label>
            <select
              value={field13Value}
              onChange={(e) => handleDropdown13Change(e.target.value)}
            >
              <option value="">Product Plyunit</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
        </div>

        <div className="side-by-side3">
          <div className="formm-fielddd">
            <label>LABOUR PER FLOOR:</label>
            <select
              value={field14Value}
              onChange={(e) => handleDropdown14Change(e.target.value)}
            >
              <option value="">Product Labour Per Floor</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>

          <div className="formm-fielddd">
            <label>LOADING/ UNLOADING PRICE:</label>
            <select
              value={field15Value}
              onChange={(e) => handleDropdown15Change(e.target.value)}
            >
              <option value="">Product Loading/ Unloading Price</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Delivery;
