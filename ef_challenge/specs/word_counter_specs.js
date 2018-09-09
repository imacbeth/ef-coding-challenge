const assert = require('assert');
const WordCounter = require('../src/models/word_counter.js');

describe('WordCounter', function() {

  let exampleReviews;
  let wordCounter;

  beforeEach(function() {
    exampleReviews = ["excellent product, good value",   "Excellent value - will buy again"];
    wordCounter = new WordCounter();
  })

  it('should be able to create an array of words', function() {
  const expected = ["excellent", "product", "good", "value", "excellent", "value", "will", "buy", "again"];
  const actual = wordCounter.createArrayOfWords(exampleReviews);
  assert.deepStrictEqual(actual, expected);
  });

  it('should be able to create a word map', function () {
      wordArray = wordCounter.createArrayOfWords(exampleReviews);
    const expected = {"again":1, "buy":1, "excellent":2, "good":1, "product":1, "value":2, "will":1}
    const actual = wordCounter.createWordMap(wordArray)
    assert.deepStrictEqual(actual, expected);
  })

  it('should be able to create a sorted array of word objects with frequency counts', function () {
    wordArray = wordCounter.createArrayOfWords(exampleReviews);
    wordsMap = wordCounter.createWordMap(wordArray);

    const expected = [ {"word":"excellent", "total":2}, {"word":"value", "total":2}, {"word":"product", "total":1}, {"word":"good", "total":1}, {"word":"will", "total":1}, {"word":"buy", "total":1}, {"word":"again", "total":1} ]
    const sortedWordArray = wordCounter.sortByFrequency(wordsMap);
    assert.deepStrictEqual(sortedWordArray, expected);
  })

});
