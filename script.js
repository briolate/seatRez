


$(document).ready(function(){

$(".seat").click(function popup(){

  $(".popForm").css("display","block");

});

$('.seat').hover(function(){
    $(this).fadeTo(100, '.35');
  },
  function(){
    $(this).fadeTo(100, '1');
  }
);

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
