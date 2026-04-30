function goPage2() {
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");
}

function goPage1() {
  document.getElementById("page2").classList.add("hidden");
  document.getElementById("page1").classList.remove("hidden");
}

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

document.addEventListener("change", function (e) {
  if (e.target.classList.contains("price-check")) {
    updateTotal();
  }
});

document.addEventListener("click", function (e) {
  const title = e.target.closest(".group-title");

  if (title) {
    title.closest(".option-group").classList.toggle("open");
  }
});

updateTotal();