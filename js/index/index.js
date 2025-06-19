
// used for hiding it
const firstLoadSection = document.getElementsByClassName('first-load');

// get cookie function
function getCookie(name) {
  // value of stored cookies assigned to value variable
  const value = `; ${document.cookie}`;
  // split val by semicolon and name
  const parts = value.split(`; ${name}=`);
  // return all parts ex cookie name = first one
  return parts.pop().split(';').shift();
}

//checking if the save button is clicked
document.getElementById('save-button').addEventListener('click', function () {
  //constant to which data is stored in localStorage
  const userData = {
    //data from input fields
    username: document.getElementById('username').value,
    bio: document.getElementById('bio').value,
    education: document.getElementById('education').value,
    batch: document.getElementById('batch').value
  }
  // stores stringified json data to localstorage under the name userData. 
  // p.s. browsers' localStorage can only use strings
  localStorage.setItem('userData', JSON.stringify(userData));
  // hiding the first load section after saving data
  for (let i = 0; i < firstLoadSection.length; i++) {
    firstLoadSection[i].style.display = 'none';
  }
  //test
  console.log('Data saved successfully!');

});

// fetching data and displaying
const storedData = localStorage.getItem('userData');
if (storedData) {
  // parsing data for easier access under the name userData
  const userData = JSON.parse(storedData);
  // seeting the content of the greet-user-name id as the stored value
  document.getElementById('greet-user-name').textContent = userData.username || '';
}




//check if first visit
if (!getCookie('hasVisited')) {
  // fist visit
  console.log('fisrt visit')
  // shows first load
  for (let i = 0; i < firstLoadSection.length; i++) {
    firstLoadSection[i].style.display = 'block';
  }
  // set cookie
  document.cookie = "hasVisited=true; path=/; max-age=" + 60 * 60 * 24 * 365 * 69;
}

else {
  // not first visit
  console.log('not first visit');
  // hide first load
  for (let i = 0; i < firstLoadSection.length; i++) {
    firstLoadSection[i].style.display = 'none';
  }
}














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

