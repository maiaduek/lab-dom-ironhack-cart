// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = (Number(price) * Number(quantity)).toFixed(2);
  product.querySelector('.subtotal span').innerHTML = subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  let products = document.getElementsByClassName("product");
  let sum = 0
  
  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i])
    sum += Number(products[i].querySelector(".subtotal span").innerHTML)
  }
  document.querySelector("#total-value span").innerHTML = sum.toFixed(2)
  
}

// ITERATION 4

function removeProduct(event) {
  // const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  let rmvButtons = document.getElementsByClassName('btn btn-remove');
  for (let i = 0; i < rmvButtons.length; i++) {
    rmvButtons[i].addEventListener('click', () => {
      rmvButtons[i].parentNode.parentNode.parentNode.removeChild(rmvButtons[i].parentNode.parentNode)
      calculateAll()
    })
  }
}
removeProduct()
// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
