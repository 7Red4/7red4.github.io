$(document).ready(function ($) {

  $nav = $('.nav');
  $mNav = $('.mNav');
  $sk1 = $('.skillItem1');
  $sk2 = $('.skillItem2');
  $btn1 = $('.btn1');
  $btn2 = $('.btn2');
  $phBar = $('.phoneBar');
  $skillTop =$('#skills').offset().top;
  $winTop = $(window).scrollTop();
  
  //順暢導向
  $nav.on('click', '.navItem', function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 50
    }, 800);
  });
  $mNav.on('click', '.anchor', function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 40
    }, 800);
  });

  //初始啟動
  $sk1.show();
  $sk2.hide();
  $btn1.addClass('clicked');

  //手機板NAV
  $('.icon').click(function () {
    $mNav.slideToggle();
  });
  $(window).scroll(function () {
    $mNav.slideUp('normal');
  });

  //照片輪播
  setInterval(carousel, 4000);
  var index = 1;
  function carousel() {
    img = document.getElementById("photo")
    if (index == 1) {
      img.style.backgroundImage = null;
      img.style.backgroundImage = "url('./img/profile1.jpg')";
      index++;
    } else if (index == 2) {
      img.style.backgroundImage = null;
      img.style.backgroundImage = "url('./img/profile2.jpg')";
      index++;
    } else {
      img.style.backgroundImage = null;
      index = 1;
      carousel();
    }
  }
  //高度判斷
  $(window).scroll(function () {
    if ($winTop >= $('.profile').offset().top - 100) {
      $nav.addClass('fixed');
      $phBar.show();
      $phBar.addClass('fixed');
      $mNav.addClass('mfixed');
    } else {
      $nav.removeClass('fixed');
      $phBar.removeClass('fixed');
      $mNav.removeClass('mfixed');
    }
  });

  $(window).scroll(function () {
    if ($winTop >= $skillTop - 600) {
      $('.codItem1').addClass('HTML');
    }
    if ($winTop >= $skillTop - 560) {
      $('.codItem2').addClass('CSS');
    }
    if ($winTop >= $skillTop - 520) {
      $('.codItem3').addClass('JavaScript');
    }
    if ($winTop >= $skillTop - 480) {
      $('.codItem4').addClass('jQuery');
    }
    if ($winTop >= $skillTop - 440) {
      $('.codItem5').addClass('Vuejs');
    }
  });

  $(window).scroll(function () {
    if ($winTop >= $skillTop - 600) {
      $('.exItem1').addClass('Ae');
    }
    if ($winTop >= $skillTop - 560) {
      $('.exItem2').addClass('Pr');
    }
    if ($winTop >= $skillTop - 520) {
      $('.exItem3').addClass('Ps');
    }
    if ($winTop >= $skillTop - 480) {
      $('.exItem4').addClass('Ai');
    }
  });

  //手機板技能表分頁
  $btn1.click(function () {
    $sk2.hide();
    $sk1.show();
    $btn1.addClass('clicked');
    $btn2.removeClass('clicked');
  });
  $btn2.click(function () {
    $sk1.hide();
    $sk2.show();
    $btn2.addClass('clicked');
    $btn1.removeClass('clicked');
  });

  //作品集上字
  $('.ookami').hover(function () {
    $(this).append($('<a target="_blank" rel="noopener noreferrer" href="https://goo.gl/B33xis">狼少年的獨白</a>'));
  }
    , function () {
      $(this).find("a:last").remove();
    })
  $('.drumkit').hover(function () {
    $(this).append($('<a>網頁簡易鼓組</a>'));
  }
    , function () {
      $(this).find("a:last").remove();
    })
  $('.vueCal').hover(function () {
    $(this).append($('<a>Vue計算機</a>'));
  }
    , function () {
      $(this).find("a:last").remove();
    })
}) ($);