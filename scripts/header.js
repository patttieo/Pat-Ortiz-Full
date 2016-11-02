$(document).ready( function() {

  $('.open-menu').on('click', function() {
    $(this).removeClass('active');
    $('.close-menu').addClass('active')
    $('.menu-wrapper').addClass('active');
  });
  $('.close-menu').on('click', function() {
    $(this).removeClass('active');
    $('.open-menu').addClass('active')
    $('.menu-wrapper').removeClass('active');
    $('.menu-backgrounds').find('.active').removeClass('active');
  });  


  // Menu bg change 
  $('.nav-item').on('mouseenter', function () {
    var bgChange = $(this).data('bg'); 
    $('.menu-backgrounds').find('.active').removeClass('active');
    $('.menu-backgrounds').find('.' + bgChange ).addClass('active');
  });


});