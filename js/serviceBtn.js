document.addEventListener("DOMContentLoaded", function () {
  const btnDetails = [
    { btn: document.getElementById("webBtn"), detail: document.getElementById("webDetail") },
    { btn: document.getElementById("seoBtn"), detail: document.getElementById("seoDetail") },
    { btn: document.getElementById("mobileBtn"), detail: document.getElementById("mobileDetail") },
  ];

  function clearActive() {
    btnDetails.forEach(({ btn, detail }) => {
      btn.classList.remove("active");
      detail.classList.add("hidden");
    });
  }

  btnDetails.forEach(({ btn, detail }) => {
    console.log(btn, detail);
    btn.addEventListener("click", function () {
      clearActive();
      btn.classList.add("active");
      detail.classList.remove("hidden");
    });
  });
});
