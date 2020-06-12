import React, { Component } from 'react'

import './App.css';
import axios from 'axios';

export default class App extends Component {

  state = {
    fact: ''
  }

  componentDidMount() {
    this.fetchFact();
  }

  fetchFact = async () => {
    try {
      const { data: { text } } = await axios.get('https://uselessfacts.jsph.pl/random.json?language=en');
      
      this.setState({
        fact: text
      })
      
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">
            {this.state.fact}
          </h1>
          <button className="button" onClick={this.fetchFact}>Click for a new fact!</button>
        </div>
      </div>
    )
  }
}

