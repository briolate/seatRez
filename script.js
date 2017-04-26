$(document).ready(function(){

$(".seat").click(function(){
  //or slideToggle depending on what we want
  $(".popForm").slideDown("slow");

});
//add an if else later? like if the seat is reservered, on hover it will
//show their info. else fadeTo? butts.
$('.seat').hover(function(){

    $(this).fadeTo(100, '.35');
  },
  function(){
    $(this).fadeTo(100, '1');
  }
);


// clicked
$('.seat').click(function(){

$(this).toggleClass('seatSelected');
$(this).addClass("reserved");
});




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
  $('.people p').text(data.First, data.Last);

}
});

//Jumbotron button toggle
$('.btn').click(function(){
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
