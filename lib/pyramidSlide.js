'use strict';

/**
 * Get fastest path to the bottom of the pyramid number structure.
 * Each number represents how much you will be slowed down by friction.
 * 
 * @param {number} rowCount - number of rows in pyramid number structure
 * @param {Array.<Array>} layerData - the data within each layer
 * 
 * example data format for layerData; [[1], [2,3], [4,5,6]]
 * 
 * @returns {number} - the sum of the path of least resistance.
 */
function getSumOfLeastResistivePath(rowCount, layerData) {
  // Ensure rowCount matches number of layers provided
  if (rowCount !== layerData.length) {
    throw new Error('The number of rows does not match the number of layers provided. Please verify your input data.');
  }

  // create placeholder for our position as we traverse the pyramid number structure
  let position = 0;

  let totalFriction = 0;

  // Loop through each layer once
  layerData.forEach((layer, index) => {
    let rowNumber = index + 1;

    // Ensure each row has the correct amount of numbers; as to keep consistent with the pyramid data structure
    if (index + 1 !== layer.length) {
      throw new Error(`The number of elements in row ${rowNumber} is invalid. Please verify your input data.`);
    }

    // if the array length is greater than 1 we return the value of the smallest digit out of the two postions in the layer
    if (layer.length > 1) {
      let smallestFrictionValue;
      let nextLayerPositionStart;

      // compare the two next elements in the journey down the pyramid
      // in the next layer we start from the position currently selected in this layer
      if (layer[position + 1] < layer[position]) {
        smallestFrictionValue = layer[position + 1];
        nextLayerPositionStart = position + 1;
      } else {
        smallestFrictionValue = layer[position];
        nextLayerPositionStart = position;
      }

      // sum up new friction value
      totalFriction += smallestFrictionValue;

      // identify the position to start at in next layer
      position = nextLayerPositionStart;

    } else {
      totalFriction = layer[position];
    }
  });

  return totalFriction;
}

module.exports = {
  getSumOfLeastResistivePath,
};
