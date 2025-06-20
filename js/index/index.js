
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