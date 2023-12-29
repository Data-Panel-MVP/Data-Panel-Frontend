// Category.js
import React from "react";
import Navbarr from "../Navbar/Navbar";
import wood from "./pimg/wood.png";
import hardware from "./pimg/hardware.png";
import furniture from "./pimg/furniture.png";
import sanitary from "./pimg/sanitary.png";
import appliances from "./pimg/Appliances.png";
import electrical from "./pimg/electrical.png";
import plumbing from "./pimg/plumbing.png";
import chemicals from "./pimg/Chemicals.png";
import tiles from "./pimg/tiles and stones.png";
import carpenter from "./simg/carpenter.png";
import modular from "./simg/Modular.png";
import pop from "./simg/pop.png";
import wiring from "./simg/wiring.png";
import fabrications from "./simg/fabrications.png";
import sofa from "./simg/sofa.png";
import mattress from "./simg/mattress.png";
import flooring from "./simg/Flooring.png";
import painting from "./simg/painting.png";
import sliding from "./simg/sliding.png";
import proofing from "./simg/proofing.png";
import bricks from "./simg/bricks.png";
import rcc from "./simg/rcc.png";
import marble from "./simg/marble.png";
import "./Category.css";

const Category = () => {
  return (
    <div>
      <Navbarr />
      <div className="category-container">
        <h1>Product Category</h1>
        <div className="button-container">
          <div className="category-button">
            <button>
              <img src={wood} alt="Category 1" />
            </button>
            <p>Wood and</p>
            <p>Laminates</p>
          </div>
          <div className="category-button">
            <button>
              <img src={hardware} alt="Category 2" />
            </button>
            <p>Hardware</p>
          </div>
          <div className="category-button">
            <button>
              <img src={furniture} alt="Category 3" />
            </button>
            <p>Furniture</p>
          </div>
          <div className="category-button">
            <button>
              <img src={sanitary} alt="Category 4" />
            </button>
            <p>Sanitary</p>
          </div>
          <div className="category-button">
            <button>
              <img src={appliances} alt="Category 5" />
            </button>
            <p>Appliances</p>
          </div>
          <div className="category-button">
            <button>
              <img src={electrical} alt="Category 6" />
            </button>
            <p>Electrical</p>
          </div>
          <div className="category-button">
            <button>
              <img src={plumbing} alt="Category 7" />
            </button>
            <p>Plumbing</p>
          </div>
          <div className="category-button">
            <button>
              <img src={chemicals} alt="Category 8" />
            </button>
            <p>Chemicals</p>
          </div>
          <div className="category-button">
            <button>
              <img src={tiles} alt="Category 9" />
            </button>
            <p>Tiles and</p>
            <p>Stones</p>
          </div>
        </div>
        <div className="centered-button">
          <button>ADD NEW PRODUCT</button>
        </div>
      </div>
      <div className="category-container">
        <h1>Service Category</h1>
        <div className="button-container">
          <div className="category-button">
            <button>
              <img src={carpenter} alt="Category 1" />
            </button>
            <p>Carpenter</p>
          </div>
          <div className="category-button">
            <button>
              <img src={modular} alt="Category 2" />
            </button>
            <p>Modular</p>
            <p>Kitchen</p>
          </div>
          <div className="category-button">
            <button>
              <img src={pop} alt="Category 3" />
            </button>
            <p>POP Work</p>
          </div>
          <div className="category-button">
            <button>
              <img src={wiring} alt="Category 4" />
            </button>
            <p>Electrical</p>
            <p>Wiring</p>
          </div>
          <div className="category-button">
            <button>
              <img src={fabrications} alt="Category 5" />
            </button>
            <p>Fabrications</p>
          </div>
          <div className="category-button">
            <button>
              <img src={sofa} alt="Category 6" />
            </button>
            <p>Sofa</p>
          </div>
          <div className="category-button">
            <button>
              <img src={mattress} alt="Category 7" />
            </button>
            <p>Mattress</p>
          </div>
        </div>
      </div>
      <div className="category-container">
        <div className="button-container">
          <div className="category-button">
            <button>
              <img src={flooring} alt="Category 8" />
            </button>
            <p>Flooring Tiles</p>
            <p>Work</p>
          </div>
          <div className="category-button">
            <button>
              <img src={painting} alt="Category 9" />
            </button>
            <p>Painting</p>
            <p>Work</p>
          </div>
          <div className="category-button">
            <button>
              <img src={sliding} alt="Category 10" />
            </button>
            <p>Sliding</p>
            <p>Window</p>
          </div>
          <div className="category-button">
            <button>
              <img src={proofing} alt="Category 11" />
            </button>
            <p>Water</p>
            <p>Proofing</p>
          </div>
          <div className="category-button">
            <button>
              <img src={bricks} alt="Category 12" />
            </button>
            <p>Bricks Wall</p>
            <p>and Plaster</p>
          </div>
          <div className="category-button">
            <button>
              <img src={rcc} alt="Category 13" />
            </button>
            <p>RCC Steel</p>
            <p>Fitter</p>
          </div>
          <div className="category-button">
            <button>
              <img src={marble} alt="Category 14" />
            </button>
            <p>Marble and</p>
            <p>Granite</p>
          </div>
        </div>
        <div className="centered-button">
          <button>ADD NEW SERVICE</button>
        </div>
      </div>
    </div>
  );
};

export default Category;
