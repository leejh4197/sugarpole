import { useState } from "react";
import CalculationPad from "../components/calculator/CalculationPad";
import CalculatorNumberPad from "../components/calculator/CalculatorNumberPad";
import { calculatorBtn } from "../constant/calculator/calculationBtn";
import { numberPad } from "../constant/calculator/numberPad";
import { calculate } from "../utils/calculation";

const Calculator = () => {
  const [result, setResult] = useState<string>("0");

  // Mouse Click Event
  // 결과
  const handleGetResultClick = () => {
    const evaluatedResult = calculate(result);
    console.log(evaluatedResult);
    setResult(evaluatedResult.toString());
  };

  // 숫자, 소수점 추가
  const handleGetNumClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    if (value === "delete") {
      setResult(result.slice(0, -1));
    } else {
      setResult((prev) => (prev === "0" ? value : prev + value));
    }
  };

  // 연산자 추가
  const handleGetOperClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    setResult((prev) => (prev === "0" ? value : prev + value));
  };

  // KeyboardEvent
  // 함수 정의: 키보드 입력이 연산자인지 확인하는 함수
  const isOperatorKey = (key: string) => {
    return /\d|\.|\*|\^|\+|-|×|\/|%|÷/.test(key);
  };

  // Calculator 컴포넌트 내에서 키보드 입력 처리하는 함수
  const handleKeyPad = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();

    const key = e.key;

    // "*"를 "×"로 변환
    let normalizedKey = key;

    // "*"를 "×"로 변환
    if (key === "*") {
      normalizedKey = "×";
    } else if (key === "/") {
      normalizedKey = "÷";
    } else {
      normalizedKey = key;
    }

    // 숫자, 연산자, 소수점일 때 처리
    if (isOperatorKey(normalizedKey)) {
      setResult((prev) =>
        prev === "0" ? normalizedKey : prev + normalizedKey
      );
    } else if (key === "Enter") {
      handleGetResultClick();
    } else if (key === "Backspace") {
      setResult(result.slice(0, -1));
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center outline-none"
      onKeyDown={handleKeyPad}
      tabIndex={0}
    >
      <button
        className="bg-calculatorBg text-white font-bold px-10 mb-2 rounded-full"
        onClick={() => setResult("0")}
      >
        reset
      </button>
      <div className="w-[400px] h-[367px] bg-calculatorBg p-[25px]">
        <input
          value={result}
          readOnly
          className="mb-5 shadow-custom-dark text-end text-white text-[32px] w-[350px] h-[70px] px-[30px] rounded-3xl bg-calculatorResultView outline-none"
        />
        <div className="flex">
          <div className="grid grid-cols-3 gap-3 mr-[23px]">
            {numberPad.map((el, index) =>
              index === numberPad.length - 1 ? (
                <CalculatorNumberPad
                  key={index}
                  src={el.name}
                  value={el.value}
                  getNum={handleGetNumClick}
                />
              ) : (
                <CalculatorNumberPad
                  key={index}
                  number={el.name}
                  value={el.value}
                  getNum={handleGetNumClick}
                />
              )
            )}
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-3 mb-[15px]">
              {calculatorBtn.map((el, index) => (
                <CalculationPad
                  key={index}
                  operator={el.name}
                  value={el.value}
                  getOper={handleGetOperClick}
                />
              ))}
            </div>
            <button
              onClick={handleGetResultClick}
              className="bg-calculatorResultBtn shadow-custom-dark flex justify-center items-center w-full h-[47px] text-[28px] rounded-full"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
