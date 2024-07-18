import React from "react";

type CalculatorNumberType = {
  number?: string;
  value?: number | string;
  src?: string;
  getNum: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const CalculatorNumberPad = ({
  number,
  src,
  value,
  getNum,
}: CalculatorNumberType) => {
  return (
    <button
      value={value}
      onClick={getNum}
      className="flex justify-center shadow-custom-dark items-center text-2xl w-[65px] h-[45px] text-white bg-calculatorNumerPad rounded-full"
    >
      {src ? (
        <img className="w-[33px] h-6 text-white" src={src} alt="지우는버튼" />
      ) : (
        <div>{number}</div>
      )}
    </button>
  );
};

export default CalculatorNumberPad;
