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

  const cityOptions = {
    北海道: [
      { value: "札幌市", label: "札幌市" },
      { value: "函館市", label: "函館市" },
    ],
    青森県: [
      { value: "青森市", label: "青森市" },
      { value: "弘前市", label: "弘前市" },
    ],
    岩手県: [
      { value: "盛岡市", label: "盛岡市" },
      { value: "宮古市", label: "宮古市" },
    ],
  };

  const prefSelect = document.getElementById("prefSelect");
  const citySelect = document.getElementById("citySelect");

  prefSelect.addEventListener("change", function () {
    // 北海道が選ばれたら、selectedPrefは北海道となる
    const selectedPref = this.value;
    citySelect.innerHTML = '<option value="">選択してください</option>';
    // 例)北海道がcityOptionsにあればtrue
    if (cityOptions[selectedPref]) {
      cityOptions[selectedPref].forEach(function (option) {
        const opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.label;
        citySelect.appendChild(opt);
      });
    }
  });

  const form = document.querySelector("form");
  const required = form.querySelectorAll(".required_form");
  const requiredMessage = document.querySelectorAll(".required_message");

  // 初回・ﾘｾｯﾄ時全ｴﾗｰﾒｯｾｰｼﾞ非表示
  requiredMessage.forEach((msg => msg.style.display = "none"));

  form.addEventListener("submit", function (e) {
    let isValid = true;

    required.forEach(function (field) {
      // input,select直下のspan取得
      let msg = field.nextElementSibling;

      // selectの場合
      if (field.tagName === "SELECT") {
        if (!field.value) {
          msg.style.display = "block";
          isValid = false;
        } else {
          msg.style.display = "none";
        }
      // select以外
      } else {
        if (!field.value.trim()) {
          msg.style.display = "block";
          isValid = false;
        } else {
          msg.style.display = "none";
        }
      }
    });
    if (!isValid) {
      e.preventDefault();
    }
  });
});
