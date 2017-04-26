$(document).ready(function(){

//Click function to make reservation
$(".makeRez").click(function(){
  //or slideToggle depending on what we want
  $("#myModal").slideDown("slow");
});
//add an if else later? like if the seat is reservered, on hover it will
//show their info. else fadeTo? butts.

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
  $(this).toggleClass('seatSelected');
  $(this).addClass("reserved");
  });

//Click function to store reservation
$('.reserveIt').click(function() {
  var first = $("#firstName").val();
  var last = $("#lastName").val();
  var email = $("#email").val();
  var data = {
    // rows: [{
      First: first,
      Last: last,
      Email: email
    // }]
  }


      console.log(data);
if($(".seatSelected")){

  // var aSection =[$("#a1"),$("#a2"),$("#a3"),$("#a4"),$("#a5"),$("#a6")]
  $(this).addClass('reserved');

  $('#a1').text(data.First);


}
});

//Jumbotron button toggle
$('.hideHeader').click(function(){
  $('.jumbotron').slideToggle();
  var $this = $(this);
    $this.toggleClass('.btn');
    if($this.hasClass('.btn')){
        $this.text('Show more');
    } else {
      $this.text('Show less');
    }
});

//document.ready END
});
