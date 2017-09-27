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

// NAVBAR FADES IN
function fade() {
  // Fade navbar in
  $('.navbar').fadeIn(2000);
} fade();

// 'OUR VISION' CONTENT SCROLLS IN FROM LEFT

function addVision() {
    $(".ov--content-vision").addClass('is-showing');
} setTimeout(addVision, 3200);

function addContent() {
    $(".ov--content-services").addClass('is-showing');
} setTimeout(addContent, 3400);

// LOGO 2 SLIDES UP FROM BOTTOM
$(window).scroll(function() {
  var wScroll = $(this).scrollTop();

  if(wScroll > $('#ov--img').offset().top - 140) {
    $('.logo2').addClass('is-showing');
  }
});

$('.carousel--image').mouseenter(function() {
    $('.fade-text').animate({
        opacity: 0
    }, 500);
}).mouseleave(function() {
    $('.fade-text').animate({
        opacity: 1
    }, 500);
});

// Form processing with jQuery, AJAX, and vanilla JS.
$('')
