const assert = require('assert');
const WordCounter = require('../client/src/models/word_counter.js');

describe('WordCounter', function() {

  let exampleReview;
  let wordCounter;

  beforeEach(function() {
    exampleReview = "excellent product, good value";
    wordCounter = new WordCounter();
  })

  it('should be able to create an array of words', function() {
  const expected = ["excellent", "product", "good", "value"];
  const actual = wordCounter.createArrayOfWords(exampleReview);
  assert.deepStrictEqual(actual, expected);
  });

  it('should be able to create a word map', function () {
      wordArray = wordCounter.createArrayOfWords(exampleReview);
    const expected = {"excellent":1, "product":1, "good":1, "value":1}
    const actual = wordCounter.createWordMap(wordArray)
    assert.deepStrictEqual(actual, expected);
  })



});
