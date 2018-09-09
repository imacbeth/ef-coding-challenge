import React from 'react';
import WordCloud from 'react-d3-cloud';

const FreqWordCloud = function (props) {
  if (!props.wordFrequencyArray) return null;

  const data = props.wordFrequencyArray.map((word) => {  return (
    {text: word.word, value: word.total})
  });

  return(
    <div>
      
    </div>
  )
  console.log(data);
}

export default FreqWordCloud;
