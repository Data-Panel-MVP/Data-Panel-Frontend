// FormComponent.js
import React, { useState } from "react";
import "./Details.css";

const Details = () => {
  const [field1Value, setField1Value] = useState("");
  const [field2Value, setField2Value] = useState("");
  const [field3Value, setField3Value] = useState("");
  const [field4Values, setField4Values] = useState(["Specific Details"]);
  const [field5Value, setField5Value] = useState("");

  const handleDropdownChange = (selectedValue) => {
    setField1Value(selectedValue);
  };

  const handleField2Change = (e) => {
    setField2Value(e.target.value);
  };

  const handleField3Change = (e) => {
    setField3Value(e.target.value);
  };

  const handleField4Change = (index, value) => {
    const updatedValues = [...field4Values];
    updatedValues[index] = value;
    setField4Values(updatedValues);
  };

  const handleAddField4 = () => {
    setField4Values([...field4Values, "New Specs"]);
  };

  const handleRemoveField4 = (index) => {
    if (index > 0) {
      const updatedValues = [...field4Values];
      updatedValues.splice(index, 1);
      setField4Values(updatedValues);
    }
  };

  const handleField5Change = (e) => {
    setField5Value(e.target.value);
  };

  return (
    <div className="form-container">
      <h2>PRODUCT DETAILS</h2>
      <form>
        <div className="side-by-side">
          <div className="form-field">
            <label>BRAND:</label>
            <select
              value={field1Value}
              onChange={(e) => handleDropdownChange(e.target.value)}
            >
              <option value="">Brand</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>

          <div className="form-field">
            <label>PRODUCT ID:</label>
            <input
              type="text"
              value={field2Value}
              onChange={handleField2Change}
              placeholder="Product Id"
            />
          </div>
        </div>

        <div className="side-by-side">
          <div className="form-field">
            <label>PRODUCT NAME:</label>
            <input
              type="text"
              value={field3Value}
              onChange={handleField3Change}
              placeholder="Product Name"
            />
          </div>

          <div className="form-field">
            <label>DESCRIPTION:</label>
            <input
              type="text"
              value={field5Value}
              onChange={handleField5Change}
              placeholder="Product Description"
            />
          </div>
        </div>

        {field4Values.map((value, index) => (
          <div key={index} className="form-field">
            <label>SPECIFICATIONS:</label>
            <input
              type="text"
              value={value}
              onChange={(e) => handleField4Change(index, e.target.value)}
            />
            {index > 0 && (
              <button type="button" onClick={() => handleRemoveField4(index)}>
                Remove
              </button>
            )}
          </div>
        ))}
        <div className="add">
          <button type="button" onClick={handleAddField4}>
            Add Field
          </button>
        </div>
      </form>
    </div>
  );
};

export default Details;
