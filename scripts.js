$(document).ready(function () {
  $(".header_burger").click(function (event) {
    $(".header_burger, .header_menu").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $(".faq_spoiler").click(function (event) {
    $(this)
      .find(".spoiler_title")
      .toggleClass("active")
      .next()
      .slideToggle(300);
    if ($(".spoilers_block").hasClass("one")) {
      $(".faq_spoiler")
        .not($(this))
        .find(".spoiler_title")
        .removeClass("active")
        .next()
        .slideUp(300);
    }
  });

  $(".button_group button:nth-child(2)").click(function (event) {
    $(
      ".button_group button:nth-child(2), .hide, .visible, .button_group button:nth-child(1)"
    ).addClass("active");
  });

  $(".button_group button:nth-child(1)").click(function (event) {
    $(
      ".button_group button:nth-child(2), .hide, .visible, .button_group button:nth-child(1)"
    ).removeClass("active");
  });
});
