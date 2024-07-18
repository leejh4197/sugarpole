import { useEffect, useState } from "react";
import { routeBtnContent } from "../../constant/sidebar/routeBtnContent";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  const [selectNav, setSelectNav] = useState(
    sessionStorage.getItem("nav") || ""
  );
  useEffect(() => {
    sessionStorage.setItem("nav", selectNav);
  }, [selectNav]);
  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value, name } = e.currentTarget;
    setSelectNav(name);
    navigate(`/${value}`);
  };
  return (
    <div className="w-full flex justify-around border-b mb-10">
      {routeBtnContent.map((el, index) => (
        <button
          className={`w-full py-4 hover:bg-calculationPad hover:text-white ${
            index === 1 ? "border-x" : ""
          } ${selectNav === el.name ? "bg-calculationPad text-white" : ""}`}
          key={index}
          name={el.name}
          value={el.value}
          onClick={handleNavClick}
        >
          {el.name}
        </button>
      ))}
    </div>
  );
};

export default NavigationBar;
