/* page1 */
jQuery(function() {
    var appear = false;
    var pagetop = $('#page_top');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
        if (appear == false) {
          appear = true;
          pagetop.stop().animate({
            'bottom': '50px' //下から50pxの位置に
          }, 300); //0.3秒かけて現れる
        }
      } else {
        if (appear) {
          appear = false;
          pagetop.stop().animate({
            'bottom': '-50px' //下から-50pxの位置に
          }, 300); //0.3秒かけて隠れる
        }
      }
    });
    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
      return false;
    });
  });

/* page3 */
  $(function () {
        $(window).scroll(function () {
            const wHeight = $(window).height();
            const scrollAmount = $(window).scrollTop();
            $('.scrollanime').each(function () {
                const targetPosition = $(this).offset().top;
                if(scrollAmount > targetPosition - wHeight + 60) {
                    $(this).addClass("fadeInDown");
                }
            });
        });
    });

    /* page4 */
    $(function () {
          $(window).scroll(function () {
              const wHeight = $(window).height();
              const scrollAmount = $(window).scrollTop();
              $('.scrollanime').each(function () {
                  const targetPosition = $(this).offset().top;
                  if(scrollAmount > targetPosition - wHeight + 60) {
                      $(this).addClass("fadeInDown");
                  }
              });
          });
      });
      
