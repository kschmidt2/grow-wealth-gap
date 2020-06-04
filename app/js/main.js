// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }


Highcharts.setOptions({
    lang: {
      thousandsSep: ',',
      numericSymbols: [null, 'M', 'G', 'T', 'P', 'E']
    }
});

let chartIdWealthGap6 = document.getElementById("chart-container-wealth-gap-6")

// checks for the chart ID and displays a backup image if the browser can't find it
setTimeout(function() {
    if(chartIdWealthGap6.innerHTML === "") {
        // console.log('noId');
        let chartArea = document.getElementsByClassName("chart-area-wealth-gap-6");
        for(var i = 0; i < chartArea.length; i++) {
            chartArea[i].style.display = "none";
        } 
        // insert chart screenshot here
        document.getElementById("chart-fallback").innerHTML += '<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/08/chart-error_wide.1570569331252.png" style="width: 100%;max-width:660px">';
    } else {
        // console.log('yesId')
    }
},500);

function drawHighcharts() {
    Highcharts.chart(chartIdWealthGap6, {
        chart: {
            type: 'bar',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: 2,
            spacingTop: 20
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1TBI9FgQy-F1EQkL0ntgDz7UvHQCVubvVOZB8d1fDqqs',
            googleSpreadsheetWorksheet: 6
        },
        // for bar charts only
        plotOptions: {
            series: {
                groupPadding: 0.1,
                dataLabels: {
                    enabled: true,
                    format: "{y:,.0f}%"
                }
            } 
        },
        // for line charts only
        // plotOptions: {
        //     series: {
        //         lineWidth: 1,
        //         // clip: false,
        //         marker: {
        //             enabled: false,
        //             symbol: 'circle',
        //             fillColor: '#ffffff',
        //             states: {
        //                 hover: {
        //                     fillColor: '#ffffff'
        //                 }
        //             }
        //         }
        //     }
        // },
        legend: {
            // align: 'right',
            // symbolRadius: 0,
            // verticalAlign: 'top',
            // x: 0,
            // itemMarginTop: -10
            enabled: false
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            tickLength: 5,
            // edits xAxis ticks
            // dateTimeLabelFormats: {
            //     week: '%b. %e',
            // },
            // tickInterval: 24 * 3600 * 1000 * 7
        },
        yAxis: {
            visible: false,
            // title: false,
            // labels: {
            //     useHTML: true,
            //     overflow: 'allow'
            // },
            // adds commas to thousands
            // formatter: function () {
            //     return Highcharts.numberFormat(this.value,0,'.',',');
            // },
        },
        credits: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                yAxis: {
                    tickAmount: 4
                },
                legend: {
                    align: 'left',
                    x: -8
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    })
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    drawHighcharts();
} else {
    document.addEventListener("DOMContentLoaded", drawHighcharts);
}