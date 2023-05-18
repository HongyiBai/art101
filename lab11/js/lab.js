// Lab 11: Libraries & jQuery
// Working with your partner, experiment with jQuery
// Hongyi Bai <hobai@ucsc.edu> Mingze Li <mli168@ucsc.edu>
// 17 May 2023






$(document).ready(function() {
  // Add button to Challenge section
  $('#challenge').append('<button class="toggle-button">Click me!</button>');

  // Add button to Problems section
  $('#problems').append('<button class="toggle-button">Click me!</button>');

  // Add button to Results section
  $('#results').append('<button class="toggle-button">Click me!</button>');

  // Add button to Bonus section
  $('#bouns').append('<button class="toggle-button">Click me!</button>');

  $('.toggle-button').click(function() {
    // Find the parent div and toggle the special class
    $(this).parent().toggleClass('special');
  });

  // Add click event to bonus button
  $('#bonus .toggle-button').click(function() {
    // Toggle the "clicked" class on the first button
    $('#challenge .toggle-button').toggleClass('clicked');
  });
});