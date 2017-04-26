


$(document).ready(function(){

$(".seat").click(function popup(){

  $(".popForm").css("display","block");


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


$('.reserveIt').click(function() {
      var first = $("#firstName").val();
      var last = $("#lastName").val();
      var email = $("#email").val();
      //click creates obj the contains user input
      var info = [first, last, email];
      //obj is assigned to the clicked seat

});


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
