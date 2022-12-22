interface options {
    max?: number,
    min?: number,
    gt?: number,
    lt?: number
}

export default function isAmount(amt : DoubleRange, options : options) : boolean {
    // Check if the amount is a positive numeric value
    const amount = +amt;
    
  if (typeof amount !== 'number' || amount <= 0) {
    return false;
  }

   // Check if the amount does not exceed the maximum value
  return  (!options.hasOwnProperty('min') || amount >= (options.min ?? 0)) &&
    (!options.hasOwnProperty('max') || amount <= (options.max ?? 0)) &&
    (!options.hasOwnProperty('lt') || amount < (options.lt ?? 0)) &&
    (!options.hasOwnProperty('gt') || amount > (options.gt ?? 0));
  
}