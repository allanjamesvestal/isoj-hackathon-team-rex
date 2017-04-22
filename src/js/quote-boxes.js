import $ from 'jquery';
// function openNav(id) {
//   document.getElementById(id).style.display = "block";
// }
//
// function closeNav(id) {
//   document.getElementById(id).style.display = "none";
// }


$('.quotebox .quote').on('click', (e) => {
  const panelID = $(e.target).closest('.quote').data('panelId');
  $(`#${panelID}`).show();
});

$('.panel .closebtn').on('click', (e) => {
  const thisPanel = $(e.target).closest('.panel');
  thisPanel.hide();
});
