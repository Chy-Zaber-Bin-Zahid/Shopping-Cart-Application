"use strict";

// discount check
let total = () => {
  const parentDiv = document.querySelectorAll(".price");
  let sum = 0;
  parentDiv.forEach((item) => {
    sum += Number(item.textContent);
  });
  document.querySelector(".calculation-total").textContent = `Total: ${sum}tk`;
};
setInterval(total, 100);

let enter = () => {
  if (
    document.querySelector(".calculation-total").textContent !== "Total: 0tk" &&
    document.querySelector(".clac-input").value >= 0 &&
    document.querySelector(".clac-input").value <= 100
  ) {
    let store = document.querySelector(".calculation-total").textContent;
    store = store.replace("Total: ", "").replace("tk", "");
    const originalPrice = Number(store);
    const discountPercentage = Number(
      document.querySelector(".clac-input").value
    );
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountedPrice = originalPrice - discountAmount;
    document.querySelector(".calc-dis").textContent = discountedPrice;
  }
};


