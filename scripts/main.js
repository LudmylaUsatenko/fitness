$(document).ready(function() {
 
    $('.header-burger').on('click', function() {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
        $('body').toggleClass('active');
    })


    $('.popular-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    });


    $('.pricing-slider').slick({
        infinite: false,
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
    });

})