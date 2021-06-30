"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToCart = void 0;

var addToCart = function addToCart(pizza, quantity, varient) {
  return function _callee(dispatch, getState) {
    var cartItem, cartItems;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cartItem = {
              name: pizza.name,
              _id: pizza._id,
              image: pizza.image,
              varient: varient,
              quantity: quantity,
              prices: pizza.prices,
              price: pizza.prices[0][varient] * quantity
            };
            dispatch({
              type: 'ADD_TO_CART',
              payload: cartItem
            });
            cartItems = getState().cartReducer.cartItems;
            localStorage.setItem('cartItems', JSON.stringify(cartItems));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.addToCart = addToCart;