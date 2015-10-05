// $(document).ready(function() {
//
//   $(window).scroll(function () {
//       //if you hard code, then use console
//       //.log to determine when you want the
//       //nav bar to stick.
//       console.log($(window).scrollTop())
//     if ($(window).scrollTop() > 280) {
//       $('.nav').addClass('navbar-fixed');
//     }
//     if ($(window).scrollTop() < 281) {
//       $('.nav').removeClass('navbar-fixed');
//     }
//   });
// });
//
// $(function(){
//         // Check the initial Poistion of the Sticky Header
//         var stickyHeaderTop = $('.nav').offset().top;
//
//         $(window).scroll(function(){
//                 if( $(window).scrollTop() > stickyHeaderTop ) {
//                         $('.nav').css({position: 'fixed', top: '0px'});
//                         $('#stickyalias').css('display', 'block');
//                 } else {
//                         $('.nav').css({position: 'static', top: '0px'});
//                         $('#stickyalias').css('display', 'none');
//                 }
//         });
//   });
