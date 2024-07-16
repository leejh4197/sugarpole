import React from "react";
import { routeBtnContent } from "../constant/routeBtnContent";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      {routeBtnContent.map((el, index) => (
        <button key={index} onClick={() => navigate(`/${el.value}`)}>
          {el.name}
        </button>
      ))}
    </div>
  );
};

export default NavigationBar;
