document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburgerBtn");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("open");
  });
});

$(function () {
  $("#hamburgerBtn").on("click", function () {
    $("#accordionMenu").slideToggle(300);
  });

  $(window).on("resize", function () {
    if (window.innerWidth > 670) {
      $("#accordionMenu").hide();
      $("#hamburgerBtn").removeClass("open");
    }
  });

  $("#accordionMenu a").on("click", function () {
    $("#accordionMenu").slideUp(300);
    $("#hamburgerBtn").removeClass("open");
  });

  const btns = [
    document.getElementById("webBtn"),
    document.getElementById("seoBtn"),
    document.getElementById("mobileBtn"),
  ];

  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      btns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});
