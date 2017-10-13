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

// Testimonial "carousel"
// Clients JSON

// Carousel function
// setInterval(function() {
//     jQuery.each(data, function (i, item) {
//         $('#client').text(item.client);
//         $('#location').text(item.location);
//         $('#testimonial').text(item.testimonial);
//         $('#relative').text(item.relative);
//     })
// }, 5000);

var i = 1;
setInterval(function() {
    var testimonials = [
        {
            "client": "Janet Moretti",
            "location": "Green Valley, Tucson, Arizona",
            "testimonial": "Carlos's professionalism helped a great deal during a difficult time in which we had to say goodbye to my son.",
            "relative": "Paul Moretti"
        },
        {
            "client": "Douglas Glazek Jr.",
            "location": "Rio Rico, Arizona",
            "testimonial": "The amount of support Carlos showed my family left no doubt that my father would be well looked after. We were able to focus on celebrating my father’s life because of Carlos.",
            "relative": "Douglas Glazek Sr."
        },
        {
            "client": "Gloria Nuñez",
            "location": "Tucson, Arizona",
            "testimonial": "It was a pleasure to work with Carlos. He took a great deal of stress off our hands by working closely with the funeral home. Carlos’s support was felt by my entire family.",
            "relative": "Eduardo Nuñez"
        }
    ];

    $('#client').text(testimonials[i].client);
    $('#location').text(testimonials[i].location);
    $('#testimonial').text(testimonials[i].testimonial);
    $('#relative').text(testimonials[i].relative);

    console.log('Testimonial (index) #:' + i);
    // iterator reset
    if( i == 2 ) {
        i = 0;
    } else {
        i++;
    }
}, 10000);
