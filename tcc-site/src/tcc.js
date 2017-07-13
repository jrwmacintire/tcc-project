function goToByScroll(id) {
  // Remove link from 'id'
  id = id.replace("link", "");
  // Scroll
  $('html,body').animate({
    scrollTop: $("#"+id).offset().top - 50}, 'slow');
  }

  $("#navbar > ul > li > a").click(function(e) {
    // Prevent a page reload when a link is pressed
    e.preventDefault();
    // Call the scroll function
    goToByScroll($(this).attr("id"));
});

function fade() {
  // Fade navbar in
  $('.navbar').fadeIn(2000);
} fade();

// LANDING SEQUENCE AT INITIAL SITE visited
function landingSequence() {
    var top = document.querySelector("div.trans-top");
    var bot = document.querySelector("div.trans-bot");

    if(top) {
        top.className = "top-trigger";
    }
    if(bot) {
        bot.className = "bot-trigger";
    }
} setTimeout(landingSequence, 1600);

// 'OUR VISION' CONTENT SCROLLS IN FROM LEFT
function addVision() {
    $(".ov--content-vision").addClass('is-showing');
} setTimeout(addVision, 3200);

function addContent() {
    $(".ov--content-services").addClass('is-showing');
} setTimeout(addContent, 3400);

//  OLD 'OUR VISION' CONTENT SLIDE-IN CODE
//
// $(window).scroll(function() {
//   var wScroll = $(this).scrollTop();
//
//   if(wScroll > $('.ov--header').offset().top - 725) {
//     $('.ov--content-vision').addClass('is-showing');
//   }
// });
// $(window).scroll(function() {
//   var wScroll = $(this).scrollTop();
//
//   if(wScroll > $('.ov--header').offset().top - 715) {
//     $('.ov--content-services').addClass('is-showing');
//   }
// });

// LOGO 2 SLIDES UP FROM BOTTOM
$(window).scroll(function() {
  var wScroll = $(this).scrollTop();

  if(wScroll > $('#ov--img').offset().top - 140) {
    $('.logo2').addClass('is-showing');
  }
});
