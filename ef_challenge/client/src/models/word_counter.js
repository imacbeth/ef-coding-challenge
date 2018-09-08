const WordCounter = function() {

};

WordCounter.prototype.createArrayOfWords = function (text) {
  const wordsArray = text.replace(/[^A-Za-z0-9 ]/g, '').split(/\s+/);
  return wordsArray;
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
  const finalWordsArray = [];
  finalWordsArray = Object.keys(wordsMap).map(function(key) {
    return {
      name: key,
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
