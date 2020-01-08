import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Doughnut } from 'react-chartjs-2';
import Chart from './components/Chart';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Yoo</h1>
        <Chart />
      </div>
    );
  }
}

export default App;
