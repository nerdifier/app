/*=============================================
||                CHART STUFF                ||
=============================================*/

//XP BAR


// store pie chart data
var pieData = [100];
// canvas
const XPctx = document.getElementById('pie-xp').getContext('2d');
// new chart.js chart
const pieXP = new Chart(XPctx, { // init
  type: 'pie',
  data: {
    datasets: [{
      data: pieData,
      borderWidth: 0,
      backgroundColor: '#aef359'
    }]
  },
  options: {
    responsive: true, // resizing and stuff
    plugins: {
      legend: {
        display: false //disable titles
      }
    }
  }
});

// STUDY BAR

// store pie chart data
var pieData = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
// canvas
const STUDYctx = document.getElementById('pie-study-goal').getContext('2d');
// new chart.js chart
const pieSTUDY = new Chart(STUDYctx, { // init
  type: 'pie',
  data: {
    datasets: [{
      data: pieData,
      borderWidth: 0,
      backgroundColor: [
        '#ffc857',
        '#ffb347',
        '#ff9f1c',
        '#e9724c',
        '#d13f3c',
        '#c5283d',
        '#a32230',
        '#731a22',
        '#3d0f11',
        '#0a0402'
      ]
    }]
  },
  options: {
    responsive: true, // resizing and stuff
    plugins: {
      legend: {
        display: false //disable titles
      }
    }
  }
});

// TASK BAR

// store pie chart data
var pieData = [10, 10, 10, 10, 10, 10, 10, 10];
// canvas
const TASKctx = document.getElementById('pie-task-goal').getContext('2d');
// new chart.js chart
const pieTASK = new Chart(TASKctx, { // init
  type: 'pie',
  data: {
    datasets: [{
      data: pieData,
      borderWidth: 0,
      backgroundColor: [
        '#4e124f',
        '#6a1d6a',
        '#872c8a',
        '#9c3fa3',
        '#b05acb',
        '#c06cff',
        '#d18fff',
        '#e0b3ff'
      ]
    }]
  },
  options: {
    responsive: true, // resizing and stuff
    plugins: {
      legend: {
        display: false //disable titles
      }
    }
  }
});