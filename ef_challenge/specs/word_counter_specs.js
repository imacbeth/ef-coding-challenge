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

});
