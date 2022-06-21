$(function(){

  // main visual slider
  const autoplay = 5000;
  const swiperMv = new Swiper('.slide_mv', {
      effect: 'fade',
      navigation: {
        nextEl: ".slide_mv .swiper-button-next",
        prevEl: ".slide_mv .swiper-button-prev"
      },
      autoplay: {
        delay: 5000,
      },
        pagination: {
          el: ".page_active",
          clickable: false,
          renderBullet: function (index, className) {
              return '<span class="' + className + '">' + '0' + (index + 1) + "</span>";
          },
      },
      onProgress: move(),
      on: {
        slideChange : function(){
          move();
        }
      }
  });
  function move() {
      let elem = document.getElementById("progress"); 
      let width = 1;
      let autoplayTime = autoplay / 100;
      let id = setInterval(frame, autoplayTime);
      function frame() {
          if (width >= 100) {
              clearInterval(id);
          } else {
              width++; 
              elem.style.width = width + '%'; 
          }
      }
  };
  
  // main tab
  $('.wrap_tabenrolment .link_tab').click(function(e){
    e.preventDefault();
    if($(this).attr('aria-selected', false)){
      $('.wrap_tabenrolment .link_tab').attr('aria-selected', false);
      $(this).attr('aria-selected', true);
    }
  });
  
  // main entrolment slider
  const swiperEntrol = new Swiper('.slide_entrolment', {
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
      nextEl: ".slide_entrolment .swiper-button-next",
      prevEl: ".slide_entrolment .swiper-button-prev"
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }
  });
  
  // main popup slider
  const swiperpopup = new Swiper('.slide_popup', {
    spaceBetween: 10,
    pagination: {
      el: '.slide_popup .swiper-pagination',
      type: 'bullets',
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

  // sub popoup
  $('.list_comm.type_gallery .link_list, .section_enrol_view .wrap_link .link_submit').click(function(e){
    e.preventDefault();
    $('.wrap_subpopup').css('display', 'flex');
  });
  $('.wrap_subpopup .btn_close, .bg_subpopup').click(function(e){
    e.preventDefault();
    $('.wrap_subpopup').hide();
  });
  
  // module remove
  $('.area_input .btn_remove').click(function(){
    $(this).parent('.cont_input').hide();
  });
});
