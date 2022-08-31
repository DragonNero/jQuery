$("h1").click(function() {
  $("h1").css("color", "purple");
});
$("button").click(function(){
  $("h1").slideUp().slideDown().animate({opacity:0.5});
});

// $(document).keydown(function(event) {
//   console.log(event.key);
//   $("h1").text(event.key);
// });
