import React from 'react';

const WordTable = function (props) {
    if (!props.wordFrequencyArray) return null;

    console.log(props.wordFrequencyArray);
    const tableRows = props.wordFrequencyArray.map((word, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{word.word}</td>
          <td>{word.total}</td>
        </tr>
      )
    })

    return(
      <div className="word-table">
        <h2>Word Frequency Table</h2>
        <table>
          <tbody>
          <tr className="table-headings">
            <td>Position</td>
            <td>Word</td>
            <td>Number of times used</td>
          </tr>
          {tableRows}
          </tbody>
        </table>
      </div>
    )
}

export default WordTable
