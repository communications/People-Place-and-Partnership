import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();



$(document).ready(function () {

    var buttonclicked;

    $('.nav-menu').click(function () {
        if (buttonclicked != true) {
            buttonclicked = true;
            $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').toggleClass('open');
            $('header nav').slideToggle();



        }
        else {
            $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').toggleClass('open');
            $('header nav').slideToggle();

        }
    });
});


// Sticky hamburger menu on tablet and mobile.
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $('header').addClass('fixed-header');
            $('header .sub-header').slideUp();


        }
        else {
            $('header').removeClass('fixed-header');
            $('header .sub-header').show();
        }

    })


    $('.drop').click(function () {

        $('.drop-down').slideToggle();

    });
})



AOS.init({
    offset: 220, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    mirror: false,
    once: true,

});



// $("header nav ul li").hover(function() {
//     $(this).find("ul").addClass("hover-me");
//  });