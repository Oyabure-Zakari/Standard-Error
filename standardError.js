// input values
const values = [13, 12.8, 12.6, 12];

// number of treatments
const noOfTreatment = values.length;

// to calculate the mean
const mean = values.reduce((acc, cur) => acc + cur, 0) / noOfTreatment;
console.log("mean = ", mean);

// calculate each (Xi - mean)
const a = values[0] - mean;
const b = values[1] - mean;
const c = values[2] - mean;
const d = values[3] - mean;

// square each difference
const aSquare = Math.pow(a, 2);
const bSquare = Math.pow(b, 2);
const cSquare = Math.pow(c, 2);
const dSquare = Math.pow(d, 2);

// sum of squares
const sumOfSquares = [aSquare, bSquare, cSquare, dSquare]
  .map((value) => Number(value))
  .reduce((acc, cur) => acc + cur, 0);

// variance
const variance = sumOfSquares / noOfTreatment;

// compute standard deviation (S)
const standardDeviation = Math.sqrt(variance).toFixed(2);

// compute standard error (SE)
const rootOfNumnberOfTreatment = Math.sqrt(noOfTreatment);
const SE = standardDeviation / rootOfNumnberOfTreatment;
console.log("standard error", SE);

const multipySE = SE * 2;
console.log("multipy standard error = ", multipySE);
