'use strict';

const pyramidSlide = require('./pyramidSlide');

const { getSumOfLeastResistivePath, processData } = pyramidSlide;

describe('Fastest Slide Test Suite', () => {
  it('should read data from text file and convert to an object', async () => {
    const expected = {
      rowCount: 4,
      layerData: [
        ['1'],
        ['2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9', '10'],
      ],
    };

    const inputs = {
      path: 'lib/inputFiles/example.txt',
    }

    const {path} = inputs;

    const result = await processData(path);

    expect(result.rowCount).toEqual(expected.rowCount);
    expect(result.layerData).toEqual(expected.layerData);
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
