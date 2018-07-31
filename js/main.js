$(document).ready(function () {

  $('.nav').on('click', '.navItem', function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 50
    }, 800);
  });
  $('.mNav').on('click', '.anchor', function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 40
    }, 800);
  });

  //初始啟動
  $('.skillItem1').show();
  $('.skillItem2').hide();
  $('.btn1').addClass('clicked');

  //手機板NAV
  $('.icon').click(function () {
    $('.mNav').slideToggle();
  });
  $(window).scroll(function () {
    $('.mNav').slideUp('normal');
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
    if ($(window).scrollTop() >= $('.profile').offset().top - 100) {
      $('.nav').addClass('fixed');
      $('.phoneBar').show();
      $('.phoneBar').addClass('fixed');
      $('.mNav').addClass('mfixed');
    } else {
      $('.nav').removeClass('fixed');
      $('.phoneBar').removeClass('fixed');
      $('.mNav').removeClass('mfixed');
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() >= $('#skills').offset().top - 600) {
      $('.codItem1').addClass('HTML');
    }
    if ($(window).scrollTop() >= $('#skills').offset().top - 560) {
      $('.codItem2').addClass('CSS');
    }
    if ($(window).scrollTop() >= $('#skills').offset().top - 520) {
      $('.codItem3').addClass('JavaScript');
    }
    if ($(window).scrollTop() >= $('#skills').offset().top - 480) {
      $('.codItem4').addClass('jQuery');
    }
    if ($(window).scrollTop() >= $('#skills').offset().top - 440) {
      $('.codItem5').addClass('Vuejs');
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() >= $('#skills').offset().top - 600) {
      $('.exItem1').addClass('Ae');
    }
    if ($(window).scrollTop() >= $('#skills').offset().top - 560) {
      $('.exItem2').addClass('Pr');
    }
    if ($(window).scrollTop() >= $('#skills').offset().top - 520) {
      $('.exItem3').addClass('Ps');
    }
    if ($(window).scrollTop() >= $('#skills').offset().top - 480) {
      $('.exItem4').addClass('Ai');
    }
  });

  //技能表分頁
  $('.btn1').click(function () {
    $('.skillItem2').hide();
    $('.skillItem1').show();
    $('.btn1').addClass('clicked');
    $('.btn2').removeClass('clicked');
  });
  $('.btn2').click(function () {
    $('.skillItem1').hide();
    $('.skillItem2').show();
    $('.btn2').addClass('clicked');
    $('.btn1').removeClass('clicked');
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
});