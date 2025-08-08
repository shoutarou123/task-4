document.addEventListener("DOMContentLoaded", function() {
  const HEADER_HEIGHT = 60;

  const scrollMap = [
    { linkClass: ".about_link", sectionSelector: ".about_content" },
    { linkClass: ".service_link", sectionSelector: ".service_content" },
    { linkClass: ".contact_link", sectionSelector: ".contact_content" },
  ];

  scrollMap.forEach(({ linkClass, sectionSelector }) => {
    const links = document.querySelectorAll(linkClass);
    const section = document.querySelector(sectionSelector);
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const rect = section.getBoundingClientRect();
        const offsetTop = window.pageYOffset + rect.top - HEADER_HEIGHT;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      });
    });
  });

  const MobileScrollMap = [
    { linkId: "accordionAboutLink", sectionSelector: ".about_content" },
    { linkId: "accordionServiceLink", sectionSelector: ".service_content" },
    { linkId: "accordionContactLink", sectionSelector: ".contact_content" },
  ];

  const ACCORDION_HEADER_HEIGHT = 200;

  MobileScrollMap.forEach(({ linkId, sectionSelector }) => {
    const link = document.getElementById(linkId);
    const section = document.querySelector(sectionSelector);

    link.addEventListener("click", function (e) {
      e.preventDefault();
      const rect = section.getBoundingClientRect();
      const offsetTop = window.pageYOffset + rect.top - ACCORDION_HEADER_HEIGHT;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    });
  });
})
