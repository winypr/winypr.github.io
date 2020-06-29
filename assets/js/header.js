
(function($){
  $(function(){
    $("li.submenu").click(function(){
      console.log("테스트");
      if ($(this).hasClass('active')) $(this).removeClass('active');
      else $(this).addClass('active'); 
    });
  });
})(jQuery);
