// Import jQuery and Lodash
import $ from 'jquery';
import _ from 'lodash';

// Add HTML elements dynamically using jQuery
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="start-button">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Function to update the click counter
let count = 0;
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

// Use lodash debounce to handle button click
$('#start-button').on('click', _.debounce(updateCounter, 500));
