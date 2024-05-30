function roundExchangeRate(exchangeRate: number): string {
  const exchangeRateString = exchangeRate.toString();
  let integerPart = '';
  let fractionalPart = '';

  const dotIndex = exchangeRateString.indexOf('.');

  if (dotIndex !== -1) {
    integerPart = exchangeRateString.slice(0, dotIndex);
    fractionalPart = exchangeRateString.slice(dotIndex + 1);
  } else {
    integerPart = exchangeRateString;
  }

  if (parseInt(integerPart) === 0) {
    if (fractionalPart.length >= 2) {
      const firstTwoDigits = fractionalPart.slice(0, 2);
      if (firstTwoDigits === '00') {
        const flirtsTwoNumbersIndex = fractionalPart.search(/[1-9]/);
        return exchangeRate.toFixed(flirtsTwoNumbersIndex + 2);
      }

      return Number(`${integerPart}.${fractionalPart}`).toFixed(2);
    }
    return exchangeRate.toFixed(2);
  }

  if (fractionalPart.slice(0, 2) === '00') {
    return `${integerPart}.00`;
  }

  const significantIndex = fractionalPart.search(/[1-9]/);
  if (significantIndex === -1) {
    return exchangeRate.toFixed(2);
  }
  const precision = significantIndex + 2;
  const roundedNum = Number(exchangeRate.toFixed(precision));
  return roundedNum.toFixed(2);
}

console.log(roundExchangeRate(0.556));

export default roundExchangeRate;
