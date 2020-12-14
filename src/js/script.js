 $(document).ready(function(){
    /* $('.carousel__inner').slick({
        speed: 2000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/arrow_left.svg"></button>'
      }); */
      $('ul.catalog__tabs').on('hover', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($
          (this).index()).addClass('catalog__content_active');
      });

      $('.catalog-item__link').each(function(i){
        $(this).on('click', function(e){
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })

      })
      $('.catalog-item-back').each(function(i){
        $(this).on('click', function(e){
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })

      })
      $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
      });
      
      $('.modal__close').on('click', function(){
        $('.overlay,#consultation,#order,#thanks').fadeOut('slow');
      });
      
      $('.button_mini').each(function(i){
        $(this).on('click',function(){
          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn('slow');
        });
      });
  }); 
 /*  var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controlsText: [
      '<img src="../img/arrow_left.svg">'
    ]
  }); */