import $ from 'jquery';


export default () => {
  $('.quotebox .quote').on('click', (e) => {
    const panelID = $(e.target).closest('.quote').data('panelId');
    $(`#${panelID}`).show();
  });

  $('.panel .closebtn').on('click', (e) => {
    const thisPanel = $(e.target).closest('.panel');
    thisPanel.hide();
  });
};
