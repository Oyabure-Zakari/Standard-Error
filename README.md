# Standard Error Calculator
This repository contains a JavaScript file that calculates the standard error of a dataset. It eliminates the manual hassle of using a calculator to compute each value in a column to get the standard error.

## Features
Calculates the mean, variance, standard deviation, and standard error
Simple and easy-to-use JavaScript code

## Usage
Clone the repository:
bash
git clone https://github.com/Oyabure-Zakari/Standard-Error.git

## Navigate to the repository directory:
bash
cd Standard-Error

## Include the standardError.js file in your project:
HTML
<script src="path/to/standardError.js"></script>

## Use the provided code to calculate the standard error:
// Input values <br>
const values = [13, 12.8, 12.6, 12];

// Number of treatments <br>
const noOfTreatment = values.length;

// Calculate the mean <br>
const mean = values.reduce((acc, cur) => acc + cur, 0) / noOfTreatment;

// Calculate each (Xi - mean) <br>
const a = values[0] - mean;
const b = values[1] - mean;
const c = values[2] - mean;
const d = values[3] - mean;

// Square each difference <br>
const aSquare = Math.pow(a, 2); <br>
const bSquare = Math.pow(b, 2); <br>
const cSquare = Math.pow(c, 2); <br>
const dSquare = Math.pow(d, 2); <br>

// Sum of squares <br>
const sumOfSquares = [aSquare, bSquare, cSquare, dSquare]
  .map((value) => Number(value))
  .reduce((acc, cur) => acc + cur, 0);

// Variance <br>
const variance = sumOfSquares / noOfTreatment;

// Compute standard deviation (S) <br>
const standardDeviation = Math.sqrt(variance).toFixed(2);

// Compute standard error (SE) <br>
const rootOfNumnberOfTreatment = Math.sqrt(noOfTreatment); <br>
const SE = standardDeviation / rootOfNumnberOfTreatment; <br>

// Multiply standard error by two <br>
const multipySE = SE * 2;

## License
This project is licensed under the MIT License.
