$(function(){
    $('.banner-main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false
      });
       //=======about js part start=======//
       $('.about2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
        ]   
      });
       //====== about js part end=======//

      //====== counter js part start=======//
      $('.counter').counterUp({
        delay: 10,
        time: 2500
    });
    //====== counter js part end=======//

      // =========comment part start======//
      $('.cmt').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
      });
    // ========comment part end======//
   
    //====== Team js part start=======//
    $('.team-main').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,

      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
      ]   
    });
    //====== Team js part end=======//

    //====== veno box js part start=======//
    new VenoBox({
      selector: '.my-image-links',
      numeration: true,
      infinigall: true,
      share: true,
      spinner: 'rotating-plane'
  });
    new VenoBox({
      selector: '.my-video-links',
      numeration: true,
      infinigall: true,
      share: true,
      spinner: 'rotating-plane'
  });
    //====== veno box js part end=======//

    //====== team js part start=======//
     //scroll-spy & Smooth-scrolling
  var scrollLink = $('.scroll-link');
  $(scrollLink).on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - 30
    }, 1000);
  });
  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    scrollLink.each(function () {
      var sectionhead = $(this.hash).offset().top - 40;
      if (scrollTop >= sectionhead) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });
    //====== team js part end=======//
    //====== team js part start=======//
    //====== team js part end=======//
    //====== team js part start=======//
    //====== team js part end=======//

    //====== sticky js part start=======//
    $(window).scroll(function(){
      var top = $(this).scrollTop()
      if(top > 300){
        $(".navbar").addClass("sticky-menu")
      }
      else{
        $(".navbar").removeClass("sticky-menu")
      }
      if(top > 300){
        $(".back-to-top").fadeIn(300)
      }
      else{
        $(".back-to-top").fadeOut(300)
      }
    })
    //====== sticky js part end=======//
    //======back-to-top======//
    $(".back-to-top").click(function(){
      $("html,body").animate({scrollTop: 0},1000)
    })
    //======back-to-top======//
})