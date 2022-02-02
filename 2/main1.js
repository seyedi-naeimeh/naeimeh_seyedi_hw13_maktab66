$(document).ready(function(){
  $("#accordion > li > div").click(function(){

    if(false == $(this).next().is(':visible')) {
      $('#accordion ul').slideUp(300);
    }
    $(this).next().slideToggle(300);
  });
  
  $('#accordion ul:eq(0)').show();



  $('#accordion').css({"list-style": "none", "width": "80%","padding": "100px"});
  $('#accordion div').css({"background-color": "#FF9927", "margin": "1px", "padding":"10px"});
  $('#accordion ul').css({" list-style": "none" ,"display": "none"});
  $('#accordion a').css({"text-decoration": "none"});
  $('ul li').css({"list-style": "none"});
});


