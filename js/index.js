// sidebar
$(".open").on("click", function () {
  $(".sidebar").animate({ left: "0" }, 1000);
});

$(".close").on("click", function () {
  $(".sidebar").animate({ left: "-200px" }, 1000);
});

// scroll to sections
$(".sidebar a").on("click", function () {
  const currentSection = $(this).attr("href");
  const sectionOffsetTop = $(currentSection).offset().top;
  $("html, body").animate({ scrollTop: sectionOffsetTop }, 2000);
});

// accordion
$(".my-accordion h3").on("click", function () {
  $(this).next().slideToggle(1000);
  $(".my-accordion p").not($(this).next()).slideUp(1000);
});

// counter
const countDownDate = new Date("jun 11, 2025 09:00:00").getTime();
let countDown = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $(".counter .days").html(`${days} D`);
  $(".counter .hours").html(`${hours} h`);
  $(".counter .minutes").html(`${minutes} m`);
  $(".counter .seconds").html(`${seconds} s`);

  if (distance < 0) {
    clearInterval(countDown);
    $(".counter .row").html(`<h2 class="text-white text-center">EXPIRED</h2>`);
  }
}, 1000);

// remaining text
$(".contact textarea").on("keyup", function () {
  const textLength = $(this).val().length;
  const remainText = 100 - textLength;
  if (remainText <= 0) {
    $(".contact .remain").html("your available character finished");
  } else {
    $(".contact .remain").html(remainText);
  }
});
