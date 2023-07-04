let minus = (id) => {
  const increaseTitle = document.querySelector(
    `#product-${id} .increase-title`
  ).textContent;
  if (increaseTitle !== "1") {
    document.querySelector(`#product-${id} .increase-title`).textContent =
      Number(increaseTitle) - 1;
    let option = document.querySelector(
      `#product-${id} .increase-title`
    ).textContent;
    const parentDiv = document.querySelector(".inside");
    const childElement = parentDiv.querySelector(`#product-${id}`);
    const productDetails = document.getElementById(`product-${id}`);

    const price = productDetails
      .querySelector(".product-price")
      .textContent.replace("tk", "");

    let child = childElement.querySelector(".selected-div");
    let newTotal = String(Number(option));
    child.querySelector(".total").textContent = newTotal;
    child.querySelector(".price").textContent =
      Number(price) * Number(newTotal);
  }
};

let plus = (id) => {
  const increaseTitle = document.querySelector(
    `#product-${id} .increase-title`
  ).textContent;
  document.querySelector(`#product-${id} .increase-title`).textContent =
    Number(increaseTitle) + 1;
  let option = document.querySelector(
    `#product-${id} .increase-title`
  ).textContent;
  const parentDiv = document.querySelector(".inside");
  const childElement = parentDiv.querySelector(`#product-${id}`);
  const productDetails = document.getElementById(`product-${id}`);
  const price = productDetails
    .querySelector(".product-price")
    .textContent.replace("tk", "");

  let child = childElement.querySelector(".selected-div");
  let newTotal = String(Number(option));
  child.querySelector(".total").textContent = newTotal;
  child.querySelector(".price").textContent = Number(price) * Number(newTotal);
};