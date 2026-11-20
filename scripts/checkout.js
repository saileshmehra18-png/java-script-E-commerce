import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { rendercheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-class.js';
// import '../data/car.js'
// import '../data/backend-practice.js'

async function loadPage() {
  try {
    await loadProductsFetch();

    const value = await new Promise((resolve) => {
      loadCart(() => {
        resolve();
      })
    });
  } catch (error) {
    console.log("unexpected error please try again later");
  }

  renderOrderSummary();
  renderPaymentSummary();
  rendercheckoutHeader();
}
loadPage()


/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    })
  })
]).then((value) => {
  console.log(value);
  renderOrderSummary();
  renderPaymentSummary();
  rendercheckoutHeader();
})
*/
/*
new Promise((resolve)=> {
  loadProducts(() => {
    resolve('value1');
  });
}).then((value) => {
  console.log(value);
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    })
  })
}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
  rendercheckoutHeader();
})
  */
