export const usePrice = (id) => {
  //12345
  const idStr = String(id || "0");
  //"12345"
  const lastTwoDigits = idStr.slice(-2);
  //"45"
  const priceComponent = parseInt(lastTwoDigits, 10) || 0;
  //45
  const finalPrice = 50 + priceComponent;
  //95
  return finalPrice;
};
