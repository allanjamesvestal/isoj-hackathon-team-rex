// import $ from 'jquery';
// import './furniture';

// Copyright
var d = new Date();
var year = d.getFullYear();

$('.copyright').text(year);


// Open, close nav
function openNav() {
  document.getElementById("mySidenav").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
}
