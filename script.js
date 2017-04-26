$(document).ready(function(){

$(".row").click(function(){

  $("popForm").css("display","block");
});

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
});

//document.ready END
});
