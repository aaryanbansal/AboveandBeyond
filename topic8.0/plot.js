document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        xAxis: {
            categories: ['height', 'weight', 'breadth']
        },
        series:[{
            name: 'nitin', 
            data: [6, 9, 9]
        },
        {
            name: 'parth', 
            data: [7, 8, 6]
        }
    ]
    });
});