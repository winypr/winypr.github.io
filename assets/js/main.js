(function($){
  $(function(){
    $(".button-collapse").sideNav();
    var $dropDown = $(".dropdown-button > i");
        $dropDown.eq(1).dropdown();
        console.log("테스트");
  });
})(jQuery);
