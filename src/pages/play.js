const playData = [
  { amount: 10 },
  { amount: 10 },
  { amount: 10 },
  { amount: 10 },
  { amount: 10 },
  { amount: 10 },
  { amount: 10 },
];

let sum = 0;
playData.forEach((data) => {
  sum += data.amount;
});

console.log(sum);
