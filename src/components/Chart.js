import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

export default class Chart extends Component {
  constructor(props) {
    super(props); // Props are properties you can pass into components
    this.state = {
      // To create the state
      chartData: {
        labels: ['London', 'Manchester', 'Leeds', 'Birmingham', 'Coventry'],
        datasets: [
          {
            label: 'Population',
            data: [10000, 8000, 6000, 5500, 2300],
            backgroundColor: ['blue', 'red', 'green', 'yellow', 'orange']
          }
        ]
      }
    };
  }

  render() {
    return (
      <div className='chart'>
        <Bar
          data={this.state.chartData}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}
