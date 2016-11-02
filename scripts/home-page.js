
$(document).ready( function() {



  $('.intro-button').on('click', function() {
    $('.intro-wrapper').addClass('notactive');
    $('.home-container').addClass('active');
    $('.header-wrapper').addClass('active');
  });


    var dir = "/static/sample-work/";
    var fileextension = ".jpg";
    $.ajax({
      //This will retrieve the contents of the folder if the folder is configured as 'browsable'
      url: dir,
      success: function (data) {
        //List all .png file names in the page
        $(data).find("a:contains(" + fileextension + ")").each(function () {
            $(".col-sm-12").append("<img src='" + dir + filename + "'>");
        });
      }
    });


  var $imgTrigger = $( '.image-trigger' );
  $( '.ha-waypoint' ).each( function(i) {
    var $el = $( this ),
    animClassDown = $el.data( 'animateDown' );

    $el.waypoint( function( direction ) {
      if( direction === 'down' && animClassDown ) {
        $el.addClass("image-active");
      }
    }, { offset: '50%' });
  });
});


