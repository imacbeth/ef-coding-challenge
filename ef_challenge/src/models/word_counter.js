const WordCounter = function() {

};

WordCounter.prototype.createArrayOfWords = function (reviewsArray) {
  let arrayofWords = []
  for(let i=0; i< reviewsArray.length; i++){
    arrayofWords.push(reviewsArray[i].replace(/[^A-Za-z0-9\s]/g,"").toLowerCase().split(/\s+/))
  }

  const flattenedWordsArray = arrayofWords.reduce(
    function(accumulator, currentValue) {
      return accumulator.concat(currentValue);
  },
  []);
  return flattenedWordsArray;
};

WordCounter.prototype.createWordMap = function (wordsArray) {
  const wordsMap = {};

  wordsArray.forEach(function (key) {
    if (wordsMap.hasOwnProperty(key)) {
      wordsMap[key]++;
    } else {
      wordsMap[key] = 1;
    }
  });

  return wordsMap;
};


WordCounter.prototype.sortByFrequency = function (wordsMap) {
  let finalWordsArray = [];
  finalWordsArray = Object.keys(wordsMap).map(function(key) {
    return {
      word: key,
      total: wordsMap[key]
    };
  });
// to sort in descending order
  finalWordsArray.sort(function(a, b) {
    return b.total - a.total;
  });

  return finalWordsArray;
};

module.exports = WordCounter;
