import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RecordList from './components/recordList.js';

const numbers = [
  { artist: "Weird Al'Yankovic", title: "Polka Party!" },
  { artist: "Tchaikovsky", title: "The Greatest Hits Album" },
];
class App extends Component {
  render() {
    return (
      <RecordList
      list={numbers}
      />
    );
  }
}

export default App;
