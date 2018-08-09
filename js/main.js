$(document).ready(function($) {
  var $nav = $(".nav");
  var $mNav = $(".mNav");
  var $icon = $(".icon");
  var $cross = $(".cross");
  var mNav = document.getElementById("mNav");
  var $sk1 = $(".skillItem1");
  var $sk2 = $(".skillItem2");
  var $btn1 = $(".btn1");
  var $btn2 = $(".btn2");
  var $phBar = $(".phoneBar");

  alert("This website is only work on chrome!!");

  //順暢導向
  $nav.on("click", ".navItem", function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 50
      },
      800
    );
  });
  $mNav.on("click", ".anchor", function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 40
      },
      800
    );
  });

  //初始啟動
  $sk1.show();
  $sk2.hide();
  $btn1.addClass("clicked");
  $cross.hide();

  //手機板NAV
  $icon.click(function() {
    mNav.style.width = "200px";
    mNav.style.height = "100vh";
    $icon.hide();
    $cross.show();
  });
  $cross.click(function() {
    mNav.style.width = "0";
    $icon.show();
    $cross.hide();
  });
  $(window).scroll(function() {
    mNav.style.width = "0";
    $icon.show();
    $cross.hide();
  });

  //照片輪播
  setInterval(carousel, 4000);
  var index = 1;
  function carousel() {
    img = document.getElementById("photo");
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
  $(window).scroll(function() {
    if ($(window).scrollTop() >= $(".profile").offset().top - 100) {
      $phBar.show();
      $nav.addClass("fixed");
      $phBar.addClass("fixed");
      $mNav.addClass("mfixed");
      $mNav.show();
    } else {
      $phBar.hide();
      $nav.removeClass("fixed");
      $phBar.removeClass("fixed");
      $mNav.removeClass("mfixed");
      $mNav.hide();
    }
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() >= $("#skills").offset().top - 600) {
      $(".codItem1").addClass("HTML");
    }
    if ($(window).scrollTop() >= $("#skills").offset().top - 560) {
      $(".codItem2").addClass("CSS");
    }
    if ($(window).scrollTop() >= $("#skills").offset().top - 520) {
      $(".codItem3").addClass("JavaScript");
    }
    if ($(window).scrollTop() >= $("#skills").offset().top - 480) {
      $(".codItem4").addClass("jQuery");
    }
    if ($(window).scrollTop() >= $("#skills").offset().top - 440) {
      $(".codItem5").addClass("Vuejs");
    }
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() >= $("#skills").offset().top - 600) {
      $(".exItem1").addClass("Ae");
    }
    if ($(window).scrollTop() >= $("#skills").offset().top - 560) {
      $(".exItem2").addClass("Pr");
    }
    if ($(window).scrollTop() >= $("#skills").offset().top - 520) {
      $(".exItem3").addClass("Ps");
    }
    if ($(window).scrollTop() >= $("#skills").offset().top - 480) {
      $(".exItem4").addClass("Ai");
    }
  });

  //手機板技能表分頁
  $btn1.click(function() {
    $sk2.hide();
    $sk1.show();
    $btn1.addClass("clicked");
    $btn2.removeClass("clicked");
  });
  $btn2.click(function() {
    $sk1.hide();
    $sk2.show();
    $btn2.addClass("clicked");
    $btn1.removeClass("clicked");
  });

  //作品集上字
  $(".ookami").hover(
    function() {
      $(this).append(
        $(
          '<a target="_blank" rel="noopener noreferrer" href="https://goo.gl/B33xis">狼少年的獨白</a>'
        )
      );
    },
    function() {
      $(this)
        .find("a:last")
        .remove();
    }
  );
  $(".drumkit").hover(
    function() {
      $(this).append(
        $(
          '<a target="_blank" rel="noopener noreferrer" href="../DrumKits/DrumKit.html">網頁簡易鼓組</a>'
        )
      );
    },
    function() {
      $(this)
        .find("a:last")
        .remove();
    }
  );
  $(".vueCal").hover(
    function() {
      $(this).append($("<a>Vue計算機</a>"));
    },
    function() {
      $(this)
        .find("a:last")
        .remove();
    }
  );
})($);
