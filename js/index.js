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

  const HEADER_HEIGHT = 60;

  const scrollMap = [
    {linkClass: ".about_link", sectionSelector: ".about_content"},
    {linkClass: ".service_link", sectionSelector: ".service_content"},
    {linkClass: ".contact_link", sectionSelector: ".contact_content"}
  ];

  scrollMap.forEach(({linkClass, sectionSelector}) => {
    const links = document.querySelectorAll(linkClass);
    const section = document.querySelector(sectionSelector);
    links.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const rect = section.getBoundingClientRect();
        const offsetTop = window.pageYOffset + rect.top - HEADER_HEIGHT;
        window.scrollTo({ top: offsetTop, behavior: "smooth"});
      });
    });
  });

  const MobileScrollMap = [
    {linkId: "accordionAboutLink", sectionSelector: ".about_content"},
    {linkId: "accordionServiceLink", sectionSelector: ".service_content"},
    {linkId: "accordionContactLink", sectionSelector: ".contact_content"}
  ];

  const ACCORDION_HEADER_HEIGHT = 120;

  MobileScrollMap.forEach(({linkId, sectionSelector}) => {
    const ids = document.getElementById(linkId);
    const section = document.querySelector(sectionSelector);
    ids.forEach(id => {
      id.addEventListener("click", function(e) {
        e.preventDefault();
        const rect = section.getBoundingClientRect();
        const offsetTop = window.pageYOffset + rect.top - ACCORDION_HEADER_HEIGHT;
        window.scrollTo({ top: offsetTop, behavior: "smooth"});
      });
    });
  });

});
