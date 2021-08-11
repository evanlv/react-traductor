import { useContext } from "react";
import FrenchFlag from "../../assets/france.svg";
import SpanishFlag from "../../assets/spain.svg";
import EnglishFlag from "../../assets/united-kingdom.svg";
import { Context } from "../../context/langContext";

import "./ToggleLangs.css";

const ToggleLangs = () => {
  const { toggleLang } = useContext(Context);

  return (
    <div className="container-langs">
      <img src={FrenchFlag} alt="" onClick={() => toggleLang("FR")} />
      <img src={SpanishFlag} alt="" onClick={() => toggleLang("FR")} />
      <img src={EnglishFlag} alt="" onClick={() => toggleLang("FR")} />
    </div>
  );
};

export default ToggleLangs;
