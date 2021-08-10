import FrenchFlag from "../../assets/france.svg";
import SpanishFlag from "../../assets/spain.svg";
import EnglishFlag from "../../assets/united-kingdom.svg";

import "./ToggleLangs.css";

const ToggleLangs = () => {
  return (
    <div className="container-langs">
      <img src={FrenchFlag} alt="" />
      <img src={SpanishFlag} alt="" />
      <img src={EnglishFlag} alt="" />
    </div>
  );
};

export default ToggleLangs;
