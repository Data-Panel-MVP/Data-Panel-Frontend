import React, { useState } from "react";
import "./Form.css";
import Upload1 from "./upload1.png";

function Formm() {
  const [forms, setForms] = useState([]);
  const [forms1, setForms1] = useState([]);
  const [field16Value, setField16Value] = useState("");
  const [field17Value, setField17Value] = useState("");
  const [field18Value, setField18Value] = useState("");
  const [field19Value, setField19Value] = useState("");
  const [field20Value, setField20Value] = useState("");
  const [field21Value, setField21Value] = useState("");
  const [field22Values, setField22Values] = useState(["Specific Details"]);
  const [field23Value, setField23Value] = useState("");
  const [field24Value, setField24Value] = useState("");
  const [field25Value, setField25Value] = useState("");
  const [field26Values, setField26Values] = useState(["Specific Details"]);
  const [field27Value, setField27Value] = useState("");
  const [field28Value, setField28Value] = useState("");
  const [field29Value, setField29Value] = useState("");
  const [field30Value, setField30Value] = useState("");
  const [field31Value, setField31Value] = useState("");
  const [field32Value, setField32Value] = useState("");
  const [field33Value, setField33Value] = useState("");
  const [showPopup1, setShowPopup1] = useState(false);

  const handlePlusButtonClick1 = () => {
    setShowPopup1(true);
  };

  const handleUploadButtonClick1 = () => {
    // Add your image upload logic here
    // This could be a form submission or any other method to handle image uploads
    alert("Image uploaded!");
    setShowPopup1(false);
  };

  const addForm = (type) => {
    const newForm = {
      id: forms.length + 1,
      type: type,
    };
    setForms([...forms, newForm]);
  };
  const addForm1 = (type) => {
    const newForm1 = {
      id: forms1.length + 1,
      type: type,
    };
    setForms1([...forms1, newForm1]);
  };

  const removeForm = (id) => {
    const updatedForms = forms.filter((form) => form.id !== id);
    setForms(updatedForms);
  };
  const removeForm1 = (id) => {
    const updatedForms1 = forms1.filter((form) => form.id !== id);
    setForms1(updatedForms1);
  };

  const handleField16Change = (e) => {
    setField16Value(e.target.value);
  };
  const handleField17Change = (e) => {
    setField17Value(e.target.value);
  };

  const handleField18Change = (e) => {
    setField18Value(e.target.value);
  };
  const handleDropdown19Change = (selectedValue) => {
    setField19Value(selectedValue);
  };

  const handleField20Change = (e) => {
    setField20Value(e.target.value);
  };

  const handleField21Change = (e) => {
    setField21Value(e.target.value);
  };

  const handleField22Change = (index2, value2) => {
    const updatedValues2 = [...field22Values];
    updatedValues2[index2] = value2;
    setField22Values(updatedValues2);
  };

  const handleAddField22 = () => {
    setField22Values([...field22Values, "New Specs"]);
  };

  const handleRemoveField22 = (index2) => {
    if (index2 > 0) {
      const updatedValues2 = [...field22Values];
      updatedValues2.splice(index2, 1);
      setField22Values(updatedValues2);
    }
  };

  const handleField23Change = (e) => {
    setField23Value(e.target.value);
  };

  const handleField24Change = (e) => {
    setField24Value(e.target.value);
  };

  const handleField25Change = (e) => {
    setField25Value(e.target.value);
  };

  const handleField26Change = (index3, value3) => {
    const updatedValues3 = [...field26Values];
    updatedValues3[index3] = value3;
    setField26Values(updatedValues3);
  };

  const handleAddField26 = () => {
    setField26Values([...field26Values, "New Specs"]);
  };

  const handleRemoveField26 = (index3) => {
    if (index3 > 0) {
      const updatedValues3 = [...field26Values];
      updatedValues3.splice(index3, 1);
      setField26Values(updatedValues3);
    }
  };

  const handleField27Change = (e) => {
    setField27Value(e.target.value);
  };

  const handleField28Change = (e) => {
    setField28Value(e.target.value);
  };
  const handleDropdown29Change = (selectedValue) => {
    setField29Value(selectedValue);
  };
  const handleDropdown30Change = (selectedValue) => {
    setField30Value(selectedValue);
  };
  const handleField31Change = (e) => {
    setField31Value(e.target.value);
  };

  const handleField32Change = (e) => {
    setField32Value(e.target.value);
  };
  const handleField33Change = (e) => {
    setField33Value(e.target.value);
  };

  return (
    <div className="containerr">
      <div className="buttonss">
        <button onClick={() => addForm("type1")}>ADD TYPE 1 VARIATION</button>
        <button onClick={() => addForm1("type2")}>ADD TYPE 2 VARIATION</button>
      </div>
      <div className="formss">
        {forms.map((form, index) => (
          <div className="form" key={index}>
            <h2>TYPE 1 VARIATION {index + 1}</h2>
            <form>
              {form.type === "type1" && (
                <>
                  <div className="side-by-side4">
                    <div className="form-field4">
                      <label>VARIATION TYPE:</label>
                      <input
                        type="text"
                        value={field23Value}
                        onChange={handleField23Change}
                        placeholder="Product Variation Type"
                      />
                    </div>
                    <div className="form-field4">
                      <label>PRODUCT VARIATION NAME:</label>
                      <input
                        type="text"
                        value={field24Value}
                        onChange={handleField24Change}
                        placeholder="Product Variation Name"
                      />
                    </div>
                  </div>
                  <div className="side-by-side4">
                    <div className="form-field4">
                      <label>DESCRIPTION:</label>
                      <input
                        type="text"
                        value={field25Value}
                        onChange={handleField25Change}
                        placeholder="Product Description"
                      />
                    </div>
                    <div className="side-by-side7">
                      {field26Values.map((value3, index3) => (
                        <div key={index3} className="form-field4">
                          <label>SPECIFICATIONS:</label>
                          <input
                            type="text"
                            value={value3}
                            onChange={(e) =>
                              handleField26Change(index3, e.target.value)
                            }
                          />
                          {index3 > 0 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveField26(index3)}
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      ))}
                      <div className="add1">
                        <button type="button" onClick={handleAddField26}>
                          Add Field
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="side-by-side4">
                    <div className="form-field4">
                      <label>PRODUCT VARIATION SIZE:</label>
                      <input
                        type="text"
                        value={field27Value}
                        onChange={handleField27Change}
                        placeholder="Product Variation Size"
                      />
                    </div>
                    <div className="form-field4">
                      <label>PRODUCT VARIATION THICKNESS:</label>
                      <input
                        type="text"
                        value={field28Value}
                        onChange={handleField28Change}
                        placeholder="Product Variation Thickness"
                      />
                    </div>
                  </div>

                  <div className="side-by-side4">
                    <div className="form-field4">
                      <label>COLOR:</label>
                      <select
                        value={field29Value}
                        onChange={(e) => handleDropdown29Change(e.target.value)}
                      >
                        <option value="">Color</option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                      </select>
                    </div>
                    <div className="form-field4">
                      <label>LABOUR PER FLOOR:</label>
                      <select
                        value={field30Value}
                        onChange={(e) => handleDropdown30Change(e.target.value)}
                      >
                        <option value="">Product Labour Per Floor</option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                      </select>
                    </div>
                  </div>
                  <div className="side-by-side4">
                    <div className="form-field4">
                      <label>PRODUCT PRICE:</label>
                      <input
                        type="number"
                        value={field31Value}
                        onChange={handleField31Change}
                        placeholder="Product Price"
                      />
                    </div>
                    <div className="form-field4">
                      <label>PRODUCT DISCOUNTED PRICE:</label>
                      <input
                        type="number"
                        value={field32Value}
                        onChange={handleField32Change}
                        placeholder="Product Discounted Price"
                      />
                    </div>
                  </div>
                  <div className="form-field4">
                    <label>PRODUCT DISCOUNTED PERCENTAGE:</label>
                    <input
                      type="number"
                      value={field33Value}
                      onChange={handleField33Change}
                      placeholder="Product Discounted Percentage"
                    />
                  </div>
                </>
              )}
            </form>
            <div>
              <h4>IMAGE:</h4>
              <div className="side-by-side6">
                <button
                  className="plusButton1"
                  onClick={handlePlusButtonClick1}
                >
                  +
                </button>
                <button
                  className="plusButton1"
                  onClick={handlePlusButtonClick1}
                >
                  +
                </button>
                <button
                  className="plusButton1"
                  onClick={handlePlusButtonClick1}
                >
                  +
                </button>
                <button
                  className="plusButton1"
                  onClick={handlePlusButtonClick1}
                >
                  +
                </button>
                <button
                  className="plusButton1"
                  onClick={handlePlusButtonClick1}
                >
                  +
                </button>
              </div>
              {showPopup1 && (
                <div className="popup1">
                  <button
                    className="closeButton1"
                    onClick={() => setShowPopup1(false)}
                  >
                    X
                  </button>
                  <h2>Upload Image</h2>
                  <div className="pop-con1">
                    <img src={Upload1} />
                    <input type="file" accept="image/*" />
                  </div>
                  <button
                    className="uploadButton1"
                    onClick={handleUploadButtonClick1}
                  >
                    Upload
                  </button>
                </div>
              )}
            </div>
            <div className="add2">
              <button onClick={() => removeForm(form.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="formss">
        {forms1.map((form1, index1) => (
          <div className="form1" key={index1}>
            <h2>TYPE 2 VARIATION {index1 + 1}</h2>
            <form>
              {form1.type === "type2" && (
                <>
                  <div className="side-by-side4">
                    <div className="form-field4">
                      <label>VARIATION TYPE:</label>
                      <input
                        type="text"
                        value={field16Value}
                        onChange={handleField16Change}
                        placeholder="Product Variation Type"
                      />
                    </div>
                    <div className="form-field4">
                      <label>PRODUCT VARIATION NAME:</label>
                      <input
                        type="text"
                        value={field17Value}
                        onChange={handleField17Change}
                        placeholder="Product Variation Name"
                      />
                    </div>
                  </div>
                  <div className="side-by-side4">
                    <div className="form-field4">
                      <label>DESCRIPTION:</label>
                      <input
                        type="text"
                        value={field18Value}
                        onChange={handleField18Change}
                        placeholder="Product Description"
                      />
                    </div>
                    <div className="side-by-side7">
                      {field22Values.map((value2, index2) => (
                        <div key={index2} className="form-field4">
                          <label>SPECIFICATIONS:</label>
                          <input
                            type="text"
                            value={value2}
                            onChange={(e) =>
                              handleField22Change(index2, e.target.value)
                            }
                          />
                          {index2 > 0 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveField22(index2)}
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      ))}
                      <div className="add1">
                        <button type="button" onClick={handleAddField22}>
                          Add Field
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="side-by-side4">
                    <div className="form-field4">
                      <label>PRODUCT VARIATION SIZE:</label>
                      <input
                        type="text"
                        value={field20Value}
                        onChange={handleField20Change}
                        placeholder="Product Variation Size"
                      />
                    </div>
                    <div className="form-field4">
                      <label>PRODUCT VARIATION THICKNESS:</label>
                      <input
                        type="text"
                        value={field21Value}
                        onChange={handleField21Change}
                        placeholder="Product Variation Thickness"
                      />
                    </div>
                  </div>
                  <div className="form-field4">
                    <label>COLOR:</label>
                    <select
                      value={field19Value}
                      onChange={(e) => handleDropdown19Change(e.target.value)}
                    >
                      <option value="">Color</option>
                      <option value="Option 1">Option 1</option>
                      <option value="Option 2">Option 2</option>
                      <option value="Option 3">Option 3</option>
                    </select>
                  </div>
                </>
              )}
            </form>
            <div className="add2">
              <button onClick={() => removeForm1(form1.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Formm;
