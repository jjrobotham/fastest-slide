'use strict';

const pyramidSlide = require('./pyramidSlide');

const { getSumOfLeastResistivePath } = pyramidSlide;

describe('Fastest Slide Test Suite', () => {
  it('should select the next path of least resistance', () => {
    
  });

  it('should return the sum path of least resistance given a pyramid data structure array', () => {
    const expected = 7;

    const inputs = {
      rowCount: 3,
      layerData: [[1], [2,3], [4,5,6]],
    }

    const {rowCount, layerData} = inputs;

    const result = getSumOfLeastResistivePath(rowCount, layerData);

    expect(result).toEqual(expected);
  });
});
