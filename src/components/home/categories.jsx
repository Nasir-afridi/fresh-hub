import { CATEGORIES } from "../../constant/categories";
import Category from "./categories/index";
import { useState } from "react";

const Categories = () => {
  return (
    <div>
      <p className="top-category">Top Category</p>
      <div className="category">
        {CATEGORIES.map(({ image, label }, index) => (
          // <div className="item-1">
          //   <img src={element.image} className="meat-img" />
          //   <p
          //     className={counter == 1 ? "meat cr" : "meat"}
          //     onClick={() => setCounter(counter + 1)}
          //   >
          //     {element.label}
          //   </p>
          // </div>
          <Category key={index} image={image} label={label} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
