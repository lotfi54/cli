"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllPizzas = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAllPizzas = function getAllPizzas() {
  return function _callee(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch({
              type: 'GET_PIZZAS_REQUEST'
            });
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get('/api/pizza'));

          case 4:
            response = _context.sent;
            console.log(response);
            dispatch({
              type: 'GET_PIZZAS_SUCCESS',
              payload: response.data
            });
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            dispatch({
              type: 'GET_PIZZAS_FAILED',
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

exports.getAllPizzas = getAllPizzas;