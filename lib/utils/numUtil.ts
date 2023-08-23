export function formatDecimal(value: number | null) {
  if (value === null) {
    return '--';
  }

  const isNegative = value < 0;
  const absValue = Math.abs(value);

  let decimalPart = absValue.toFixed(2).toString();

  if (decimalPart.indexOf('.') === -1) {
    decimalPart += '.00';
  } else {
    decimalPart += '00';
  }

  let integerPart = decimalPart.split('.')[0];
  let formattedInteger = '';

  for (let i = integerPart.length - 1; i >= 0; i--) {
    formattedInteger = integerPart[i] + formattedInteger;
    if (i > 0 && i % 3 === 0) {
      formattedInteger = ',' + formattedInteger;
    }
  }

  if (isNegative) {
    return '-' + formattedInteger + decimalPart.substring(decimalPart.indexOf('.'));
  } else {
    return formattedInteger + decimalPart.substring(decimalPart.indexOf('.'));
  }
}
