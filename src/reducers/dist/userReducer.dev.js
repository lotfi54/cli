"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginUserReducer = exports.registerUserReducer = void 0;

var registerUserReducer = function registerUserReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'USER_REGISTER_REQUEST':
      return {
        loading: true
      };

    case 'USER_REGISTER_SUCCESS':
      return {
        loading: false,
        success: true
      };

    case 'USER_REGISTER_FAILED':
      return {
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

exports.registerUserReducer = registerUserReducer;

var loginUserReducer = function loginUserReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'USER_LOGIN_REQUEST':
      return {
        loading: true
      };

    case 'USER_LOGIN_SUCCESS':
      return {
        loading: false,
        success: true,
        currentUser: action.payload
      };

    case 'USER_LOGIN_FAILED':
      return {
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

exports.loginUserReducer = loginUserReducer;