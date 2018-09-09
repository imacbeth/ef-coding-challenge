import React from 'react';

const WordTable = function (props) {
    if (!props.wordFrequencyArray) return null;

    console.log(props.wordFrequencyArray);
    return(
      <div>
        <h2>Word Frequency Table</h2>
        <table>
          <tr>
            <td>Position</td>
            <td>Word</td>
            <td>Number of times used</td>

          </tr>
        </table>
      </div>
    )
}

export default WordTable
