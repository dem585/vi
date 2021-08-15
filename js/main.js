$(function(){

    $('#check').click(function () {
        //check if checkbox is checked
        if ($(this).is(':checked')) {

            $('#btn_submit').removeAttr('disabled'); //enable input

        } else {
            $('#btn_submit').attr('disabled', true); //disable input
        }
    });


  $('.menu__btn').on('click', function(){
    $('.menu__block').toggleClass('menu--active');
    $('.body').toggleClass('body--hiden');
  });

    // const swiper = new Swiper('.mySwiper',{
    //     pagination: {
    //       el: ".swiper-pagination",
    //     },
    // });



    $('.mySwiper').slick({
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
     });

    $('.slider-d').slick({
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
     });


});