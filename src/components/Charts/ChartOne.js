import React, { useEffect } from 'react';
var Highcharts = require('highcharts');  
// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);

export default function ChartOne() {
    useEffect(() => {
        Highcharts.chart('containerChartOne', {
            chart: {
              type: 'pie',
              options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
              }
            },
            title: {
              text: 'Browser market shares at a specific website, 2010'
            },
            accessibility: {
              point: {
                valueSuffix: '%'
              }
            },
            tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
              pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                  enabled: true,
                  format: '{point.name}'
                }
              }
            },
            series: [{
              type: 'pie',
              name: 'Browser share',
              data: [
                ['Firefox', 45.0],
                ['IE', 26.8],
                {
                  name: 'Chrome',
                  y: 12.8,
                  sliced: true,
                  selected: true
                },
                ['Safari', 8.5],
                ['Opera', 6.2],
                ['Others', 0.7]
              ]
            }]
          });
    }, []);

    return (
        <figure class="highcharts-figure">
            <div id="containerChartOne"></div>
        </figure>
    )
}
