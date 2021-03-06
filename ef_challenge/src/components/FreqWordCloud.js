import React from 'react';
import WordCloud from 'react-d3-cloud';

const FreqWordCloud = function (props) {
  if (!props.wordFrequencyArray) return null;

  const data = props.wordFrequencyArray.map((word) => {  return (
    {text: word.word, value: word.total})
  });

  const fontSizeMapper = word => ((word.value)*8) * 5;

  return(
    <div className="word-cloud-container">
      <WordCloud
        data={data}
        fontSizeMapper={fontSizeMapper}
        font="Helvetica"
        padding={3}
      />
    </div>
  )
}

export default FreqWordCloud;
