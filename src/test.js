// function assertEqual(answer, trueAnswer) {
//   const answerStr = JSON.stringify(answer);
//   const trueAnswerStr = JSON.stringify(trueAnswer);
//   const reason = `${answerStr === trueAnswerStr}  `.slice(0, 6);
//   console.log(`is ${reason} : ${answerStr} = ${trueAnswerStr}`);
// }

// function getFibonacciNumber(index) {
//   const a = (1 + 5 ** 0.5) / 2;
//   const b = (1 - 5 ** 0.5) / 2;
//   return Math.round((a ** index - b ** index) / 5 ** 0.5);
// }

// assertEqual(getFibonacciNumber(0), 0);
// assertEqual(getFibonacciNumber(1), 1);
// assertEqual(getFibonacciNumber(2), 1);
// assertEqual(getFibonacciNumber(3), 2);
// assertEqual(getFibonacciNumber(10), 55);
