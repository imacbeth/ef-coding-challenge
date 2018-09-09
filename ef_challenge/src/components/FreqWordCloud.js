import React from 'react';
import WordCloud from 'react-d3-cloud';

const FreqWordCloud = function (props) {
  if (!props.wordFrequencyArray) return null;

  const data = props.wordFrequencyArray.map((word) => {  return (
    {text: word.word, value: word.total})
  });

  const fontSizeMapper = word => Math.log2(word.value) * 55;

  return(
    <div>
      <WordCloud
        data={data}
        fontSizeMapper={fontSizeMapper}
        font="Helvetica"
      />
    </div>
  )

}

export default FreqWordCloud;
