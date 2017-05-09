$(document).ready(function(){

//Click function to make reservation
// $(".makeRez").click(function(){
//   $("#myModal").slideDown("slow");
// });

//Hover changes opacity
$('.seat').hover(function(){
    $(this).fadeTo(100, '.35');
  },
  function(){
    $(this).fadeTo(100, '1');
  }
);

//Click function to toggle and add class
$('.seat').click(function(){
  var audio = new Audio('images/hawk.wav');
  audio.play();
  $(this).toggleClass('seatSelected');
});

//holds user input
$('.reserveIt').click(function(){
  var first = $("#firstName").val();
  var last = $("#lastName").val();
  var email = $("#email").val();
  var phone = $("#phone").val()
  var data = {
      First: first,
      Last: last,
      Email: email,
      Phone: phone
  }
  var dataDisplay = data.First + ' ' + data.Last;
  // console.log(data);

// switches classes from selected to reserved
  $(".seatSelected").replaceWith('<div class="seat reserved col-xs-2"><p>'+dataDisplay+'<div id="a1"></div></div>')
                    // .addClass('reserved')
                    .removeClass('seatSelected')
                    .off('click');

// shows names of reserved seats
  $('.reserved p').css('visibility','hidden');
  $('.reserved').hover(function(){
      $('.reserved p').css('visibility', 'visible');
    },
    function(){
      $('.reserved p').css('visibility', 'hidden');
    }
  )
});

//Jumbotron button toggle
$('.hideHeader').click(function(){
  $('.carousel, .jumbotron').slideToggle();
  var $this = $(this);
    $this.toggleClass('.btn');
    if($this.hasClass('.btn')){
        $this.text('Show Top');
    } else {
        $this.text('Hide Top');
    }
});

//Carousel interval
$('.carousel').carousel({
  interval: 3000
});

//document.ready END
});
