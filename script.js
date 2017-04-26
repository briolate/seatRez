


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

$('.reserveIt').click(function() {
      var first = $("#firstName").val();
      var last = $("#lastName").val();
      var email = $("#email").val();
      // console.log(first);
});

$('.')


//document.ready END
});
