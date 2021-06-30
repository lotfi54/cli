"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _PizzaReducers = require("./reducers/PizzaReducers");

var _cartReducer = require("./reducers/cartReducer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var finalReducer = (0, _redux.combineReducers)({
  getAllPizzasReducer: _PizzaReducers.getAllPizzasReducer,
  cartReducer: _cartReducer.cartReducer
});
var cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
var initialState = {
  cartReducer: {
    cartItems: cartItems
  }
};
var composeEnhancers = (0, _reduxDevtoolsExtension.composeWithDevTools)({});
var store = (0, _redux.createStore)(finalReducer, initialState, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk["default"])));
var _default = store;
exports["default"] = _default;