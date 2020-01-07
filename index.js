'use strict';
const pyramidSlide = require('./lib/pyramidSlide');

const { getSumOfLeastResistivePath, processData } = pyramidSlide;

/**
 * Get input data
 * 
 * To specify a path you must include it in the node command at array position 2
 * e.g. node index.js {path-to-file}
 * 
 * If no input data is specified then the deafult data file will be used
 * 
 * @returns {object} - the object with the data from the text file
 */
async function getDatafromFile() {
  try {
  const path = process.argv[2] || 'lib/inputFiles/example.txt';

  return await processData(path);
  } catch (err) {
    throw err;
  }
}

/**
 * Get Fastest Path Sum on a pyramid data structure.
 * 
 * @returns {number} - fastest path sum
 */
async function getFastestPathSum() {
  try {
  const { rowCount, layerData } = await getDatafromFile();

  const fastestPathSum = getSumOfLeastResistivePath(rowCount, layerData);
  console.log(fastestPathSum);
  return fastestPathSum;
  } catch (err) {
    throw err;
  }
}

getFastestPathSum();
