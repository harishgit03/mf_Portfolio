var options1 = {
  series: [{ data: [25, 66, 41, 89, 63, 25, 44, 20, 36, 40, 54] }],
  fill: { colors: ["#5b73e8"] },
  chart: { type: "bar", width: 70, height: 40, sparkline: { enabled: !0 } },
  plotOptions: { bar: { columnWidth: "50%" } },
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: { crosshairs: { width: 1 } },
  tooltip: {
    fixed: { enabled: !1 },
    x: { show: !1 },
    y: {
      title: {
        formatter: function (e) {
          return "";
        },
      },
    },
    marker: { show: !1 },
  },
},
  chart1 = new ApexCharts(
    document.querySelector("#total-investment-chart"),
    options1
  );
chart1.render();
var options1 = {
  series: [{ data: [25, 66, 41, 89, 63, 25, 44, 20, 36, 40, 54] }],
  fill: { colors: ["#50a5f1"] },
  chart: { type: "bar", width: 70, height: 40, sparkline: { enabled: !0 } },
  plotOptions: { bar: { columnWidth: "50%" } },
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: { crosshairs: { width: 1 } },
  tooltip: {
    fixed: { enabled: !1 },
    x: { show: !1 },
    y: {
      title: {
        formatter: function (e) {
          return "";
        },
      },
    },
    marker: { show: !1 },
  },
},
  chart2 = new ApexCharts(
    document.querySelector("#current-value-chart"),
    options1
  );
chart2.render();
var options1 = {
  series: [{ data: [25, 66, 41, 89, 63, 25, 44, 20, 36, 40, 54] }],
  fill: { colors: ["#34c38f"] },
  chart: { type: "bar", width: 70, height: 40, sparkline: { enabled: !0 } },
  plotOptions: { bar: { columnWidth: "50%" } },
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: { crosshairs: { width: 1 } },
  tooltip: {
    fixed: { enabled: !1 },
    x: { show: !1 },
    y: {
      title: {
        formatter: function (e) {
          return "";
        },
      },
    },
    marker: { show: !1 },
  },
},
  chart3 = new ApexCharts(document.querySelector("#pnl-chart"), options1);
chart3.render();
var options2 = {
  series: [{ data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54] }],
  fill: { colors: ["#f1b44c"] },
  chart: { type: "bar", width: 70, height: 40, sparkline: { enabled: !0 } },
  plotOptions: { bar: { columnWidth: "50%" } },
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: { crosshairs: { width: 1 } },
  tooltip: {
    fixed: { enabled: !1 },
    x: { show: !1 },
    y: {
      title: {
        formatter: function (e) {
          return "";
        },
      },
    },
    marker: { show: !1 },
  },
},
  chart2 = new ApexCharts(document.querySelector("#growth-chart"), options2);
chart2.render();
var options3 = {
  series: [{ data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54] }],
  fill: { colors: ["#f1b44c"] },
  chart: { type: "bar", height: 300, sparkline: { enabled: false } },
  plotOptions: { bar: { columnWidth: "50%" } },
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: { crosshairs: { width: 1 } },
  tooltip: {
    fixed: { enabled: !1 },
    x: { show: !1 },
    y: {
      title: {
        formatter: function (e) {
          return "";
        },
      },
    },
    marker: { show: !1 },
  },
},
  chart_new = new ApexCharts(document.querySelector("#new-chart"), options3);
chart_new.render();


var options = {
          series: [{
          name: 'Investments',
          data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 5.2]
        }],
          chart: {
          height: 300,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          }
        },

        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          position: 'bottom',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              }
            }
          },
          tooltip: {
            enabled: true,
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%";
            }
          }

        },
        title: {
          text: 'Monthly Investment Rate, 2024',
          floating: true,
          offsetY: 330,
          align: 'center',
          style: {
            color: '#444'
          }
        }
        };

        var chart = new ApexCharts(document.querySelector("#new-chart-2"), options);
        chart.render();
        var chart = new ApexCharts(document.querySelector("#donut-chart-new"), options);
        chart.render();


var options_scheme = {
          series: [{
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
          chart: {
          type: 'bar',
          height: 380
        },
        plotOptions: {
          bar: {
            barHeight: '100%',
            distributed: true,
            horizontal: true,
            dataLabels: {
              position: 'bottom'
            },
          }
        },
        colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
          '#f48024', '#69d2e7'
        ],
        dataLabels: {
          enabled: true,
          textAnchor: 'start',
          style: {
            colors: ['#fff']
          },
          formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
          },
          offsetX: 0,
          dropShadow: {
            enabled: true
          }
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        xaxis: {
          categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'India'
          ],
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        title: {
            text: 'Your Top 10 Schemes',
            align: 'center',
            floating: true
        },
        subtitle: {
            text: 'Your Top 10 Investment Schemes',
            align: 'center',
        },
        tooltip: {
          theme: 'dark',
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function () {
                return ''
              }
            }
          }
        },
        legend: {
    show: false  // ✅ Hides the legend (indicators)
  }
        };

        var chart = new ApexCharts(document.querySelector("#new-chart-3"), options_scheme);
        chart.render();
        var chart = new ApexCharts(document.querySelector("#chart-cat"), options_scheme);
        chart.render();

var dates = [
  { x: new Date("2024-02-01").getTime(), y: 1520 },
  { x: new Date("2024-02-02").getTime(), y: 1540 },
  { x: new Date("2024-02-03").getTime(), y: 1530 },
  { x: new Date("2024-02-04").getTime(), y: 1560 },
  { x: new Date("2024-02-05").getTime(), y: 1585 },
  { x: new Date("2024-02-06").getTime(), y: 1570 },
  { x: new Date("2024-02-07").getTime(), y: 1595 },
  { x: new Date("2024-02-08").getTime(), y: 1610 },
  { x: new Date("2024-02-09").getTime(), y: 1600 },
  { x: new Date("2024-02-10").getTime(), y: 1625 },
  { x: new Date("2024-02-11").getTime(), y: 1650 },
  { x: new Date("2024-02-12").getTime(), y: 1635 },
  { x: new Date("2024-02-13").getTime(), y: 1670 },
  { x: new Date("2024-02-14").getTime(), y: 1660 },
  { x: new Date("2024-02-15").getTime(), y: 1685 },
];
var options_price = {
          series: [
    {
      name: "XYZ MOTORS",
      data: dates,
    },
  ],
  chart: {
    type: "area",
    stacked: false,
    height: 350,
    zoom: {
      type: "x",
      enabled: true,
      autoScaleYaxis: true,
    },
    toolbar: {
      autoSelected: "zoom",
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
  },
  title: {
    text: "Stock Price Movement",
    align: "left",
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 90, 100],
    },
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return val.toFixed(2);
      },
    },
    title: {
      text: "Price",
    },
  },
  xaxis: {
    type: "datetime",
  },
  tooltip: {
    shared: false,
    y: {
      formatter: function (val) {
        return val.toFixed(2);
      },
    },
  },
        };

        var chart = new ApexCharts(document.querySelector("#new-chart-4"), options_price);
        chart.render();



var options_years = {
          series: [
          {
            name: "AUM",
            data: [1380, 1100, 990, 880, 740],
          },
        ],
        colors: ["#228B22"],
          chart: {
          type: 'bar',
          height: 300,
          dropShadow: {
            enabled: true,
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 0,
            horizontal: true,
            barHeight: '80%',
            isFunnel: true,
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val
          },
          dropShadow: {
            enabled: true,
          },
        },
        title: {
          text: 'AUM Management Year On Year (in crs)',
          align: 'middle',
        },
        xaxis: {
          categories: [
            '2025',
            '2024',
            '2023',
            '2022',
            '2021'
          ],
        },
        legend: {
          show: false,
        },
        };

        var chart = new ApexCharts(document.querySelector("#chartyears"), options_years);
        chart.render();


 var options_radio = {
          series: [44, 55, 67, 83],
          chart: {
          height: 300,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '22px',
              },
              value: {
                fontSize: '16px',
              },
              total: {
                show: true,
                label: 'Total',
                formatter: function (w) {
                  // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                  return 6341902
                }
              }
            }
          }
        },
        labels: ['ELSS Sch', 'Hybrid Sch', 'Debt Sch', 'Equity Sch'],
        };

        var chart = new ApexCharts(document.querySelector("#radio-chart"), options_radio);
        chart.render();

var options_risk = {
    series: [{
        name: 'Very Low',
        data: [15]
    }, {
        name: 'Low',
        data: [20]
    }, {
        name: 'Medium',
        data: [30]
    }, {
        name: 'High',
        data: [25]
    }, {
        name: 'Very High',
        data: [10]
    }],
    chart: {
        type: 'bar',
        height: 100,
        stacked: true,
        stackType: '100%',
        toolbar: {
            show: false
        }
    },
//    title: {
//        text: 'Risk Level',  // Adding the title
//        align: 'center',
//        style: {
//            fontSize: '16px',
//            fontWeight: 'bold',
//            color: '#333'
//        }
//    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '50%', // Adjust bar height
        }
    },
    dataLabels: {
        enabled: true,
        formatter: (val, { seriesIndex, w }) => {
            return val + '%';
        },
        style: {
            fontSize: '12px',
            colors: ['#fff']
        }
    },
    xaxis: {
        categories: ['Risk Level'],
        labels: {
            show: false
        }
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    grid: {
        show: false
    },
    colors: ['#228B50', '#56C271', '#FFD166', '#F77F00', '#D62828'], // Custom colors for each risk level
    legend: {
        position: 'bottom',
        horizontalAlign: 'center'
    }
};

var chart = new ApexCharts(document.querySelector("#risk-meter"), options_risk);
chart.render();

var options_amt = {
    series: [{
        name: 'Invested Amount',
        data: [50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000, 105000]
    }, {
        name: 'Current Value',
        data: [52000, 58000, 62000, 67000, 74000, 78000, 83000, 89000, 95000, 102000, 110000, 118000]
    }],
    chart: {
        height: 400,
        type: 'area'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        categories: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ]
    },
    yaxis: {
        title: {
            text: 'Amount (₹)'
        }
    },
    tooltip: {
        x: {
            formatter: function(val) {
                return val; // Display month names in tooltip
            }
        },
        y: {
            formatter: function(val) {
                return '₹' + val.toLocaleString();
            }
        }
    },
    colors: ['#007bff', '#28a745']
};

var chart = new ApexCharts(document.querySelector("#chart-amt"), options_amt);
chart.render();

var options_amc = {
          series: [{
          data: [21, 22, 10, 28, 16, 18,25]
        }],
          chart: {
          height: 400,
          type: 'bar',
          events: {
            click: function(chart, w, e) {
              // console.log(chart, w, e)
            }
          }
        },
        colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'],
        plotOptions: {
          bar: {
            columnWidth: '55%',
            distributed: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        xaxis: {
          categories: [
            'HDFC',
            'ICICI',
            'SBI',
            'CRS',
            'PPFS',
            'AMU',
            'HSDC'
          ],
          labels: {
            style: {
              colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'],
              fontSize: '12px'
            }
          }
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart-amc"), options_amc);
        chart.render();
