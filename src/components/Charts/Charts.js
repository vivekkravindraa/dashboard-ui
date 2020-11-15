import React from 'react'
import ChartOne from './ChartOne';
import ChartTwo from './ChartTwo';

import '../../assets/styles/Charts.scss';

export default function Charts() {
    return (
        <div className="chartsContainer">
            <ChartOne />
            <ChartTwo />
        </div>
    )
}
