import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import reviewsArray from '../reviews.json';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: reviewsArray
    }
  }


  

}

export default Main;
