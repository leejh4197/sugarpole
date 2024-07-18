export const calculate = (expression: string) => {
  try {
    const operators = expression.split(/[0-9.]+/).filter((op) => op);
    const numbers = expression.split(/[+\-×÷%^]/).map((num) => parseFloat(num));

    if (operators.length !== numbers.length - 1) {
      throw new Error("잘못 된 수식입니다.");
    }

    let total = numbers[0];
    for (let i = 0; i < operators.length; i++) {
      const operator = operators[i];
      const number = numbers[i + 1];
      switch (operator) {
        case "+":
          total += number;
          break;
        case "^":
          total **= number;
          break;
        case "-":
          total -= number;
          break;
        case "×":
          total *= number;
          break;
        case "÷":
          if (number === 0) {
            throw new Error("Cannot mod by zero");
          }
          total /= number;
          break;
        case "%":
          if (number === 0) {
            throw new Error("Cannot mod by zero");
          }
          total %= number;
          break;
        default:
          throw new Error("잘못 된 수식입니다.");
      }
    }
    return total;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return "알 수 없는 에러.";
    }
  }
};
