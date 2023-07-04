let remove = (id) => {
  const parentDiv = document.querySelector(".inside");
  const childElement = parentDiv.querySelector(`#product-${id}`);
  childElement.remove();
};

let empty = () => {
  const parentDiv = document.querySelector(".inside");
  while (parentDiv.firstChild) {
    parentDiv.removeChild(parentDiv.firstChild);
  }
  document.querySelector(".clac-input").value = "";
  document.querySelector(".calc-dis").textContent = "0";
};