import React from "react";

type CalculationPadType = {
  operator: string;
  value: string;
  getOper: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const CalculationPad = ({ operator, getOper, value }: CalculationPadType) => {
  return (
    <button
      value={value}
      onClick={getOper}
      className="flex justify-center items-center bg-calculationPad w-[45px] h-[45px] text-[24px] text-white rounded-full leading-[1px] shadow-custom-dark"
    >
      {operator}
    </button>
  );
};

export default CalculationPad;
