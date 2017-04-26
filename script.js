


$(document).ready(function(){

$(".row").click(function popup(){
  
  $("popForm").css("display","block");
});

$('.seat').hover(function(){
    $(this).fadeTo(100, '.35');
  },
  function(){
    $(this).fadeTo(100, '1');
  }
);

//document.ready END
});
