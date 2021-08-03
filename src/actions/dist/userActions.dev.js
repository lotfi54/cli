"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logoutUser = exports.loginUser = exports.registerUser = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var registerUser = function registerUser(user) {
  return function _callee(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch({
              type: 'USER_REGISTER_REQUEST'
            });
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].post('/api/users/register', user));

          case 4:
            response = _context.sent;
            console.log(response);
            dispatch({
              type: 'USER_REGISTER_SUCCESS'
            });
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            dispatch({
              type: 'USER_REGISTER_FAILED',
              payload: _context.t0
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 9]]);
  };
};

exports.registerUser = registerUser;

var loginUser = function loginUser(user) {
  return function _callee2(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            dispatch({
              type: 'USER_LOGIN_REQUEST'
            });
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].post('/api/users/login', user));

          case 4:
            response = _context2.sent;
            console.log(response);
            dispatch({
              type: 'USER_LOGIN_SUCCESS',
              payload: response.data
            });
            localStorage.setItem('currentUser', JSON.stringify(response.data));
            window.location.href = '/';
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](1);
            dispatch({
              type: 'USER_LOGIN_FAILED',
              payload: _context2.t0
            });

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 11]]);
  };
};

exports.loginUser = loginUser;

var logoutUser = function logoutUser() {
  return function (dispatch) {
    localStorage.removeItem('currentUser');
    window.location.href = '/login';
  };
};

exports.logoutUser = logoutUser;