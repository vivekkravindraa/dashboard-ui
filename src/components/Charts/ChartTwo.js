import React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
 
const data = {
  columns: [
    ['Data1', 30, 200, 100, 400, 150, 250],
    ['Data2', 50, 20, 10, 40, 15, 25, 50]
  ]
};

export default function ChartTwo() {
    return (
        <div>
            <C3Chart data={data} />
        </div>
    )
}
