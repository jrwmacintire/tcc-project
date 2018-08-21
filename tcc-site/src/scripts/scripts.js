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
    $(".ov-content-vision").addClass('is-showing');
} setTimeout(addVision, 1000);

function addContent() {
    $(".ov-content-services").addClass('is-showing');
} setTimeout(addContent, 1300);

// LOGO 2 SLIDES UP FROM BOTTOM
$(document).scroll(function() {
  var wScroll = $(this).scrollTop();

  if(wScroll > $('#ov-img').offset().top - 140) {
    $('.logo2').addClass('is-showing');
  }
});

$('.carousel-image').mouseenter(function() {
    $('.fade-text').animate({
        opacity: 0
    }, 500);
}).mouseleave(function() {
    $('.fade-text').animate({
        opacity: 1
    }, 500);
});

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

    // console.log('Testimonial (index) #:' + i);
    // iterator reset
    if( i == 2 ) {
        i = 0;
    } else {
        i++;
    }
}, 10000);

// Select specific image.
function switchToImage(ref) {
    // Remove 'active' class from list element and image in carousel.
    document.querySelector('li.active').classList.remove('active');
    document.querySelector('div.active').classList.remove('active');
    // Add 'active' class to 'ref'
    document.querySelector('li#slide' + ref.toString()).classList.add('active');
    document.querySelector('div#slide' + ref.toString()).classList.add('active');
}

//
//
//
//
//                              Form Validation

//                              Variables for validation.
var form = document.getElementsByTagName('form')[0];
var fname = document.getElementById('inputName');
var femail = document.getElementById('inputEmail');
var fone = document.getElementById('inputPhone');
var fmessage = document.getElementById('inputText');
var nameRegExp = /^[a-zA-Z0-9]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var phoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{4}/;
var simplePhoneRegExp = /^[0-9]{10}/;
var test; // boolean for RegExp matches

fname.addEventListener("input", function(event) {
    test = nameRegExp.test(fname.value);
    if(test) {
        $('div.form-group i#name').css({ opacity: 1 });
        $('div.form-group input#inputName').css({ border: '1px solid green' });
    } else {
        $('div.form-group i#name').css({ opacity: 0 });
        $('div.form-group input#inputName').css({ border: '1px solid rgb(255, 169, 94)' });
    }
});

femail.addEventListener("input", function(event) {
    test = emailRegExp.test(femail.value);
    if(test) {
        $('div.form-group i#email').css({ opacity: 1 });
        $('div.form-group input#inputEmail').css({ border: '1px solid green' });
    } else {
        $('div.form-group i#email').css({ opacity: 0 });
        $('div.form-group input#inputEmail').css({ border: '1px solid rgb(255, 169, 94)' });
    }
});

fone.addEventListener("input", function(event) {
    test = phoneRegExp.test(fone.value);
    test2 = simplePhoneRegExp.test(fone.value);
    if(test || test2) {
        $('div.form-group i#phone').css({ opacity: 1 });
        $('div.form-group input#inputPhone').css({ border: '1px solid green' });
    } else {
        $('div.form-group i#phone').css({ opacity: 0 });
        $('div.form-group input#inputPhone').css({ border: '1px solid rgb(255, 169, 94)' });
    }
});

fmessage.addEventListener("input", function(event) {
    if(fmessage.value > 0) {
        $('div.form-group i#message').css({ opacity: 1 });
        $('div.form-group input#inputText').css({ border: '1px solid green' });
    } else {
        $('div.form-group i#message').css({ opacity: 0 });
        $('div.form-group input#inputText').css({ border: '1px solid rgb(255, 169, 94)' });
    }
});
