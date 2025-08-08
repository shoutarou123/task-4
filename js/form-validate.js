document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const required = form.querySelectorAll(".required_form");
  const requiredMessage = document.querySelectorAll(".required_message");
  const tel = document.getElementById("tel");
  const telMsg = tel.nextElementSibling;

  // 初回・ﾘｾｯﾄ時全ｴﾗｰﾒｯｾｰｼﾞ非表示
  requiredMessage.forEach((msg) => (msg.style.display = "none"));
  if (telMsg) telMsg.style.display = "none";

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

    // 電話番号ﾊﾞﾘﾃﾞｰｼｮﾝ
    if (tel && tel.value.trim() !== "") {
      const regexp = /^0\d{9,10}$/;
      if (!regexp.test(tel.value.trim())) {
        if (telMsg) {
          telMsg.style.display = "block";
        }
        isValid = false;
      } else {
        if (telMsg) telMsg.style.display = "none";
      }
    } else {
      if (telMsg) telMsg.style.display = "none";
    }

    if (!isValid) {
      e.preventDefault();
    }
  });
});
