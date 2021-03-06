import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import reviewsArray from '../reviews.json';
import WordTable from '../components/WordTable.js';
import FreqWordCloud from '../components/FreqWordCloud.js';
import NavBar from '../components/NavBar.js';
const WordCounter = require('../models/word_counter.js');

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: reviewsArray,
      wordsArray: null,
      wordsMap: null,
      finalWordsArray: null,
    }

    this.getWordsArray = this.getWordsArray.bind(this);
    this.getWordsMap = this.getWordsMap.bind(this);
    this.getFinalWordsArray = this.getFinalWordsArray.bind(this);
  }

  componentDidMount(){
    this.getWordsArray();
  }

  getWordsArray(){
    const wordCounter = new WordCounter();
    let wordArray = wordCounter.createArrayOfWords(this.state.reviews);
    this.setState({ wordsArray: wordArray });
    this.getWordsMap(wordArray)
  }

  getWordsMap(wordArray){
    const wordCounter = new WordCounter();
    let wordsMap = wordCounter.createWordMap(wordArray);
    this.setState({ wordsMap: wordsMap });
    this.getFinalWordsArray(wordsMap);
  }

  getFinalWordsArray(wordsMap){
    const wordCounter = new WordCounter();
    let finalArray = wordCounter.sortByFrequency(wordsMap);
    this.setState({ finalWordsArray: finalArray }) ;
    }

  render(){

    return (
      <Router>
            <React.Fragment>
              <NavBar />
              <Route
            path="/word-table"
            render={() => (<WordTable wordFrequencyArray={this.state.finalWordsArray}/>)}/>
            <Route
          path="/word-cloud"
          render={() => (<FreqWordCloud wordFrequencyArray={this.state.finalWordsArray}/>)}/>

    </React.Fragment>
    </Router>
    );
  }

}

export default Main;
