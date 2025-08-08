document.addEventListener("DOMContentLoaded", function() {
  const cityOptions = {
    北海道: [
      { value: "札幌市", label: "札幌市" },
      { value: "函館市", label: "函館市" },
      { value: "小樽市", label: "小樽市" },
      { value: "旭川市", label: "旭川市" },
      { value: "室蘭市", label: "室蘭市" },
      { value: "釧路市", label: "釧路市" },
      { value: "帯広市", label: "帯広市" },
      { value: "北見市", label: "北見市" },
      { value: "夕張市", label: "夕張市" },
      { value: "岩見沢市", label: "岩見沢市" },
      { value: "綱走市", label: "綱走市" },
      { value: "留萌市", label: "留萌市" },
      { value: "苫小牧市", label: "苫小牧市" },
      { value: "稚内市", label: "稚内市" },
      { value: "苫小牧市", label: "苫小牧市" },
      { value: "美唄市", label: "美唄市" },
      { value: "芦別市", label: "芦別市" },
      { value: "江別市", label: "江別市" },
      { value: "赤平市", label: "赤平市" },
      { value: "紋別市", label: "紋別市" },
      { value: "士別市", label: "士別市" },
      { value: "名寄市", label: "名寄市" },
      { value: "三笠市", label: "三笠市" },
      { value: "根室市", label: "根室市" },
      { value: "千歳市", label: "千歳市" },
      { value: "滝川市", label: "滝川市" },
      { value: "砂川市", label: "砂川市" },
      { value: "歌志内市", label: "歌志内市" },
      { value: "深川市", label: "深川市" },
      { value: "富良野市", label: "富良野市" },
      { value: "登別市", label: "登別市" },
      { value: "恵庭市", label: "恵庭市" },
      { value: "伊達市", label: "伊達市" },
      { value: "北広島市", label: "北広島市" },
      { value: "石狩市", label: "石狩市" },
      { value: "北斗市", label: "北斗市" },
    ],
    青森県: [
      { value: "青森市", label: "青森市" },
      { value: "弘前市", label: "弘前市" },
      { value: "八戸市", label: "八戸市" },
      { value: "弘前市", label: "弘前市" },
      { value: "黒石市", label: "黒石市" },
      { value: "五所川原市", label: "五所川原市" },
      { value: "十和田市", label: "十和田市" },
      { value: "三沢市", label: "三沢市" },
      { value: "むつ市", label: "むつ市" },
      { value: "つがる市", label: "つがる市" },
      { value: "平川市", label: "平川市" },
     ],
    岩手県: [
      { value: "盛岡市", label: "盛岡市" },
      { value: "宮古市", label: "宮古市" },
      { value: "宮古市", label: "宮古市" },
      { value: "大船渡市", label: "大船渡市" },
      { value: "花巻市", label: "花巻市" },
      { value: "北上市", label: "北上市" },
      { value: "久慈市", label: "久慈市" },
      { value: "遠野市", label: "遠野市" },
      { value: "一関市", label: "一関市" },
      { value: "陸前高田市", label: "陸前高田市" },
      { value: "釜石市", label: "釜石市" },
      { value: "二戸市", label: "二戸市" },
      { value: "八幡平市", label: "八幡平市" },
      { value: "奥州市", label: "奥州市" },
      { value: "滝沢市", label: "滝沢市" },
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
})
