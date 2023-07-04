// Array of object
let product = [
  { id: 1, img: "/image/phone1.webp", title: "Samsung S10", price: "50000tk" },
  { id: 2, img: "/image/phone2.webp", title: "Samsung S9", price: "40000tk" },
  { id: 3, img: "/image/phone3.webp", title: "Samsung S8", price: "30000tk" },
  { id: 4, img: "/image/phone4.webp", title: "Samsung S12", price: "70000tk" },
  { id: 5, img: "/image/phone5.webp", title: "Samsung S5", price: "10000tk" },
  { id: 6, img: "/image/phone6.webp", title: "Samsung S11", price: "60000tk" },
];

const productContainer = document.querySelector(".shop-product");

product.forEach((item) => {
  const productElement = document.createElement("div");
  productElement.classList.add("product");
  productElement.setAttribute("id", `product-${item.id}`);
  productElement.innerHTML = `
    <img class="product-image" src="${item.img}" alt="${item.title}">
    <h1 class="product-title">${item.title}</h1>
    <h1 class="product-price">${item.price}</h1>
    <select class="product-option">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
    <button onClick="addToCart(${item.id})" class="product-button">Add to cart</button>
  `;
  productContainer.appendChild(productElement);
});

let addToCart = (id) => {
  const parentDiv = document.querySelector(".inside");
  const childElement = parentDiv.querySelector(`#product-${id}`);

  if (childElement) {
    const productDetails = document.getElementById(`product-${id}`);
    const option = productDetails.querySelector(".product-option").value;
    const price = productDetails
      .querySelector(".product-price")
      .textContent.replace("tk", "");

    let child = childElement.querySelector(".selected-div");
    let total = child.querySelector(".total").textContent;
    let newTotal = String(Number(total) + Number(option));
    child.querySelector(".total").textContent = newTotal;
    child.querySelector(".price").textContent =
      Number(price) * Number(newTotal);
    document.querySelector(`#product-${id} .increase-title`).textContent =
      newTotal;
  } else {
    const productDetails = document.getElementById(`product-${id}`);
    const image = productDetails.querySelector(".product-image").src;
    const title = productDetails.querySelector(".product-title").textContent;
    const price = productDetails
      .querySelector(".product-price")
      .textContent.replace("tk", "");
    const option = productDetails.querySelector(".product-option").value;

    const productContainer = document.querySelector(".inside");

    const productElement = document.createElement("div");
    productElement.classList.add("selected");
    productElement.setAttribute("id", `product-${id}`);
    productElement.innerHTML = `
      <img class="selected-image" src="${image}" alt="phone-${id}" />
      <div class = "selected-div">
        <h1>${title}</h1>
        <h1 >Price: <span class="price">${price * option}</span>tk</h1>
        <h1 >Total Product: <span class="total">${option}</span></h1>
      </div>
      <div class="remove">
      <button onClick="remove(${id})" class="selected-button">Remove</button>
      <div class="increase">
        <button class="increase-button" onClick="minus(${id})" >-</button>
        <h1 class="increase-title">${option}</h1>
        <button class="increase-button" onClick="plus(${id})" >+</button>
      </div>
      </div>
  `;
    productContainer.appendChild(productElement);
  }
};