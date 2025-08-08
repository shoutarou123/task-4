document.addEventListener("DOMContentLoaded", function() {
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
})
