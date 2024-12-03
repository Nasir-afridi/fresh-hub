import EcoLeft from "./EcoLeft";
import EcoRight from "./EcoRight";

function Eco() {
  return (
    <div className="eco-container">
      <div className="eco-background-img">
        <EcoLeft />
        <EcoRight />
      </div>
    </div>
  );
}

export default Eco;
