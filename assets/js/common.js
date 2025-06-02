// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", () => {});

// Your jQuery code goes here
$(function () {
  // Your code here
  //   $("button").on("click", () => {
  //     console.log("Hello");
  //   });

  //hambuger-menu
  $(document).ready(function () {
    const $hamburger = $("#hamburger");
    const $menu = $(".menu");
    const $body = $("body");

    $hamburger.on("click", function () {
      $(this).toggleClass("active");
      $menu.toggleClass("show");

      if ($(this).hasClass("active")) {
        $body.addClass("hidden");
      } else {
        $body.removeClass("hidden");
      }
    });
  });
//for start tag//
  $(document).ready(function() {
  $(".notice-button").on("click", function(e) {
    e.preventDefault();

    let filter = $(this).data("btn");

    $(".notice-button").removeClass("active");
    $(this).addClass("active");

    $(".below-inner-container").removeClass("show");
    $('.below-inner-container[data-content="' + filter + '"]').addClass("show");
  });
});
//for end tag
});
