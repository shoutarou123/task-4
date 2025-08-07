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
    "北海道": [
      {value: "札幌市", label: "札幌市"},
      {value: "函館市", label: "函館市"},
    ],
    "青森県": [
      {value: "青森市", label: "青森市"},
      {value: "弘前市", label: "弘前市"},
    ],
    "岩手県": [
      {value: "盛岡市", label: "盛岡市"},
      {value: "宮古市", label: "宮古市"},
    ]
  };

  const prefSelect = document.getElementById("prefSelect");
  const citySelect = document.getElementById("citySelect");


  prefSelect.addEventListener('change', function() {
    const selectedPref = this.value; // 「北海道」が選ばれたら、selectedPrefは "北海道" となる
    citySelect.innerHTML ='<option value="">選択してください</option>';
    if(cityOptions[selectedPref]) { // cityOptionsという連想配列（オブジェクト）に、現在選ばれている都道府県（selectedPref）のデータ（市区町村名配列）が用意されているかどうかをチェック
      cityOptions[selectedPref].forEach(function(option){
        const opt = document.createElement('option');
        opt.value = option.value;
        opt.textContent = option.label;
        citySelect.appendChild(opt);
      });
    }
  });
});
