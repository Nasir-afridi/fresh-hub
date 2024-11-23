import { useState } from "react";

const Category = ({ image, label }) => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="item-1">
      <img src={image} className="meat-img" />
      <p
        className={counter == 1 ? "meat cr" : "meat"}
        onClick={() => setCounter(counter + 1)}
      >
        {label}
      </p>
    </div>
  );
};

export default Category;
