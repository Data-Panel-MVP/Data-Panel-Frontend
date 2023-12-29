// Listing.js
import React, { useState } from "react";
import "./Groups.css";

const Listing = () => {
  const [field1Value, setField1Value] = useState("");
  const [field2Value, setField2Value] = useState("");
  const [field3Value, setField3Value] = useState("");
  const [field4Value, setField4Value] = useState("");

  const handleDropdownChange = (field, selectedValue) => {
    switch (field) {
      case "field1":
        setField1Value(selectedValue);
        break;
      case "field2":
        setField2Value(selectedValue);
        break;
      case "field3":
        setField3Value(selectedValue);
        break;
      case "field4":
        setField4Value(selectedValue);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="button-container">
        <button>PREVIEW</button>
        <button> JSON PREVIEW</button>
        <button>EDIT</button>
      </div>
      <div className="field-container">
        <div className="dropdown-field">
          <div className="dropdown-field select-container">
            <select
              value={field1Value}
              onChange={(e) => handleDropdownChange("field1", e.target.value)}
            >
              <option value="">CATEGORY</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
        </div>
        <div className="dropdown-field">
          <div className="dropdown-field select-container">
            <select
              value={field2Value}
              onChange={(e) => handleDropdownChange("field2", e.target.value)}
            >
              <option value="">SUB-CATEGORY</option>
              <option value="Option A">Option A</option>
              <option value="Option B">Option B</option>
              <option value="Option C">Option C</option>
            </select>
          </div>
        </div>
        <div className="dropdown-field">
          <div className="dropdown-field select-container">
            <select
              value={field3Value}
              onChange={(e) => handleDropdownChange("field3", e.target.value)}
            >
              <option value="">GROUP</option>
              <option value="Value X">Value X</option>
              <option value="Value Y">Value Y</option>
              <option value="Value Z">Value Z</option>
            </select>
          </div>
        </div>
        <div className="dropdown-field">
          <div className="dropdown-field select-container">
            <select
              value={field4Value}
              onChange={(e) => handleDropdownChange("field4", e.target.value)}
            >
              <option value="">SUB-GROUP</option>
              <option value="Item 1">Item 1</option>
              <option value="Item 2">Item 2</option>
              <option value="Item 3">Item 3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
