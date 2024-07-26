import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css'; // Import the CSS file

$(document).ready(function() {
    $('body').append('<div id="logo" style="background-image: url(\'../assets/holberton-logo.jpg\')"></div>');
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="start-button">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    let count = 0;

    function updateCounter() {
        count += 1;
        $('#count').text(`${count} clicks on the button`);
    }

    $('#start-button').on('click', _.debounce(updateCounter, 500));
});

