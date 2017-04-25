$(document).ready(function){

$(".row").click(function(){

  $("popForm").css("display","block");
});

$('.seat').hover(function(){
    $(this).fadeTo('fast', '.25');
  },
  function(){
    $(this).fadeTo('fast', '1');
  }
);

//document.ready END
});
