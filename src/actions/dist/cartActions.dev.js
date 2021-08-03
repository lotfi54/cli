"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteFromCart = exports.addToCart = void 0;

var addToCart = function addToCart(pizza, quantity, varient) {
  return function _callee(dispatch, getState) {
    var cartItem, cartItems;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cartItem = {
              name: pizza.name,
              id: pizza.id,
              image: pizza.image,
              varient: varient,
              quantity: Number(quantity),
              prices: pizza.prices,
              price: pizza.prices[0][varient] * quantity
            };

            if (cartItem.quantity > 10) {
              alert('Vous ne pouvez pas ajouté plus de 10 pizza'); //   <SnackbarContent message="I love snacks."  />
            } else {
              if (cartItem.quantity < 1) {
                dispatch({
                  type: 'DELETE_FROM_CART',
                  payload: pizza
                });
              } else {
                dispatch({
                  type: 'ADD_TO_CART',
                  payload: cartItem
                });
              }
            }

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

var deleteFromCart = function deleteFromCart(pizza) {
  return function (dispatch, getState) {
    dispatch({
      type: 'DELETE_FROM_CART',
      payload: pizza
    });
    var cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };
};

exports.deleteFromCart = deleteFromCart;