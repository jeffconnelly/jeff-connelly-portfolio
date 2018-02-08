'use strict';

$(document).ready(main);
function main() {
  $('#headerimg').hide();
  $('#headerimg').fadeIn(1000);
}

$('#head-click').click(function() {
  $('html, body').animate({
    scrollTop: $('#head-container').offset().top
  }, 800);
});

$('#contact-click').click(function() {
  $('html, body').animate({
    scrollTop: $('#project-container').offset().top
  }, 800);
});

$('#about-click').click(function() {
  $('html, body').animate({
    scrollTop: $('#contact-container').offset().top
  }, 800);
});


// $(document).ready(function(){
//     $(".thumbnail").hover(function(){
//         $(this).css("background-color", "green");
//         }, function(){
//         $(this).css("background-color", "green");
//     });
// });

// $(document).ready(img);
// function img() {
// $(".imgs").hide();
// $(".imgs").fadeIn(1000);
// }