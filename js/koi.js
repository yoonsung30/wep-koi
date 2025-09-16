//  최상단 버튼
$(function () {
  $(".arrow-btn").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 10);
    // 500ms 동안 부드럽게 최상단으로 이동
  });
});
// 포트폴리오 더보기 버튼
$(".more-btu").on("click", function () {
  $(".more-section").slideToggle(300);
});

$(window).on("scroll", function () {
  if ($(this).scrollTop() > 10) {
    $(".nav-bar-2").addClass("navbar-scrolled");
  } else {
    $(".nav-bar-2").removeClass("navbar-scrolled");
  }
});
// 포트폴리오 캐러셀

for (let i = 0; i < $(".portfolio-item").length; i++) {
  $(".portfolio-item")
    .eq(i)
    .on("click", function () {
      $(".more-carousel").addClass("carousel-show");
    });
}

$(".close-btu").on("click", function () {
  $(".more-carousel").removeClass("carousel-show");
});
