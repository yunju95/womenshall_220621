$(function(){
  /* 2022-06-23 수정 시작 */
  // main visual slider
  const autoplay = 5000;
  const swiperMv = new Swiper('.slide_mv', {
      // effect: 'fade', 2023-01-05 삭제
      spaceBetween: 10, // 2023-01-05 추가
      loop: true,
      /* navigation: {
        nextEl: ".slide_mv .swiper-button-next",
        prevEl: ".slide_mv .swiper-button-prev",
        clickable: true,
      }, 2023-01-05 삭제 */
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      /* 2023-01-05 추가 시작 */
      breakpoints: {
        1024: {
          spaceBetween: 20,
        },
      },
      /* // 2023-01-05 추가 끝 */
      /*
        pagination: {
          el: ".page_active",
          clickable: false,
          renderBullet: function (index, className) {
              return '<span class="' + className + '">' + '0' + (index + 1) + "<span class='outer_progress'><em class='progress'></em></span></span>";
          },
      },
      2023-01-05 삭제 */
  });
  /* 2022-06-23 수정 끝 */
  // main top banner
  $('.head_banner .btn_close').click(function(){
    $(this).parent().hide();
    $('#wrap').removeClass('has_headbanner');
  });

  // main tab
  $('.wrap_tabedu .link_tab').click(function(e){
    e.preventDefault();
    if($(this).attr('aria-selected', false)){
      $('.wrap_tabedu .link_tab').attr('aria-selected', false);
      $(this).attr('aria-selected', true);
    }
  });
  
  // main entrolment slider
  const swiperEdu = new Swiper('.slide_edu', {
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
      nextEl: ".wrap_edu .swiper-button-next",
      prevEl: ".wrap_edu .swiper-button-prev",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    }
  });
  
  // main popup slider
  const swiperpopup = new Swiper('.slide_popup', {
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.slide_popup .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  // sub tab
  $('.wrap_tab .link_tab').click(function(e){
    e.preventDefault();
    if($(this).attr('aria-selected', false)){
      $('.wrap_tab .link_tab').attr('aria-selected', false);
      $(this).attr('aria-selected', true);
    }
  });

  /* 2022-08-09 popup */
  // sub popoup
  $('.cont_flextable .col_btn .btn_apply, .section_edu .wrap_btn .link_apply').click(function(e){
    e.preventDefault();
    $('.wrap_subpopup').css('display', 'flex');
  });
  $('.wrap_subpopup .btn_close, .bg_subpopup').click(function(e){
    e.preventDefault();
    $('.wrap_subpopup').hide();
  });
  /* // 2022-08-09 popup */
  
  // module remove
  $('.area_input .btn_remove').click(function(){
    $(this).parent('.cont_input').hide();
  });
});
