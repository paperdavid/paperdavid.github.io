$(document).ready(function(){

  $('a.tooltip__link').hover(function(){

    $(this)
      .next('.tooltip__text')
      .addClass('show');
      

  }, function() {
    $(this)
      .next(".tooltip__text")
      .removeClass('show');
  });
  
});


