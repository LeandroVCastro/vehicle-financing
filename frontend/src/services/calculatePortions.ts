const calculatePortions = (
  times: number,
  price: number,
  entryValue: number
): string => {
  let percent = 0;
  if (times === 6) {
    percent = 12.47 / 100;
  } else if (times === 12) {
    percent = 15.56 / 100;
  } else if (times === 48) {
    percent = 18.69 / 100;
  }
  let totalValue = price - entryValue;
  totalValue = totalValue + totalValue * percent;
  return (totalValue / times / 100).toFixed(2).replaceAll(".", ",");
};

export default calculatePortions;
