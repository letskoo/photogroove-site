document.addEventListener("DOMContentLoaded", function () {

  function goPage2() {
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.remove("hidden");
  }

  function goPage1() {
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("page1").classList.remove("hidden");
  }

  // 전역으로 사용할 수 있게 등록
  window.goPage2 = goPage2;
  window.goPage1 = goPage1;

  const totalPrice = document.getElementById("totalPrice");

  function updateTotal() {
    let total = 0;

    document.querySelectorAll(".price-check").forEach((check) => {
      if (check.checked) {
        total += Number(check.dataset.price);
      }
    });

    if (totalPrice) {
      totalPrice.textContent = total.toLocaleString("ko-KR") + "원";
    }
  }

  // 체크박스 변경
  document.addEventListener("change", function (e) {
    if (e.target.classList.contains("price-check")) {
      updateTotal();
    }
  });

  // 아코디언
  document.addEventListener("click", function (e) {
    const title = e.target.closest(".group-title");

    if (title) {
      const group = title.closest(".option-group");
      group.classList.toggle("open");
    }
  });

  // 초기 실행
  updateTotal();

});