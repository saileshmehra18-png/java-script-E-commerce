function Cart(localStorageKey) {
  const cart = {
    cartItems: undefined,

    loadFromStorage() {
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));

      if (!this.cartItems) {
        this.cartItems = [{
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 2,
          deliveryOptionId: '1',
        }, {
          productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
          quantity: 1,
          deliveryOptionId: '2',
        }];

      }
    },

    saveToStorage() {
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },

    addToCart(productId) {
      let matchingItem;
      this.cartItems.forEach((cartItem) => {
        if (cartItem.productId === productId)
          matchingItem = cartItem;
      })


      const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
      const quantity = quantitySelector ? Number(quantitySelector.value) : 1;

      if (matchingItem) {
        matchingItem.quantity += quantity;
      } else {
        this.cartItems.push({
          productId: productId,
          quantity: quantity,
          deliveryOptionId: '1'
        });
      }
      this.saveToStorage();
    },

    updateCartQuantity() {
      let cartQuantity = 0;

      this.cartItems.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
      });
      return cartQuantity;
    },

    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter((cartItem) => {
        return cartItem.productId !== productId;
      });
      this.saveToStorage();
    },

    updateCartItemQuantity(productId, newQuantity) {
      this.cartItems.forEach((cartItem) => {
        if (cartItem.productId === productId) {
          cartItem.quantity = newQuantity;
        }
      });

      this.saveToStorage();
    },

    updateDeliveryOption(productId, deliveryOptionId) {

      let matchingItem;

      this.cartItems.forEach((cartItem) => {
        if (cartItem.productId === productId)
          matchingItem = cartItem;
      });

      matchingItem.deliveryOptionId = deliveryOptionId;
      this.saveToStorage();
    }
  };
  return cart;
};

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');


cart.loadFromStorage();
console.log(cart);
businessCart.loadFromStorage();
console.log(businessCart);
