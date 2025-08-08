document.addEventListener("DOMContentLoaded", function () {
  const cityOptions = {
    hokkaido: [
      "札幌市",
      "函館市",
      "小樽市",
      "旭川市",
      "室蘭市",
      "釧路市",
      "帯広市",
      "北見市",
      "夕張市",
      "岩見沢市",
      "綱走市",
      "留萌市",
      "苫小牧市",
      "稚内市",
      "苫小牧市",
      "美唄市",
      "芦別市",
      "江別市",
      "赤平市",
      "紋別市",
      "士別市",
      "名寄市",
      "三笠市",
      "根室市",
      "千歳市",
      "滝川市",
      "砂川市",
      "歌志内市",
      "深川市",
      "富良野市",
      "登別市",
      "恵庭市",
      "伊達市",
      "北広島市",
      "石狩市",
      "北斗市",
    ],
    aomori: [
      "青森市",
      "弘前市",
      "八戸市",
      "弘前市",
      "黒石市",
      "五所川原市",
      "十和田市",
      "三沢市",
      "むつ市",
      "つがる市",
      "平川市",
    ],
    iwate: [
      "盛岡市",
      "宮古市",
      "大船渡市",
      "花巻市",
      "北上市",
      "久慈市",
      "遠野市",
      "一関市",
      "陸前高田市",
      "釜石市",
      "二戸市",
      "八幡平市",
      "奥州市",
      "滝沢市",
    ],
  };

  prefSelect.addEventListener("change", function () {
    // 北海道が選ばれたら、selectedPrefはhokkaidoとなる
    const selectedPref = this.value;
    citySelect.innerHTML = '<option value="">選択してください</option>';
    // 例)hokkaidoがcityOptionsにあればtrue
    if (cityOptions[selectedPref]) {
      cityOptions[selectedPref].forEach(function (cityName) {
        const opt = document.createElement("option");
        opt.value = cityName;
        opt.textContent = cityName;
        citySelect.appendChild(opt);
      });
    }
  });
});
