'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Cookies = require('js-cookie');

var Bisquits = (function () {
  function Bisquits(name, key) {
    _classCallCheck(this, Bisquits);

    this.name = name;
    this.key = key;
    this.cookie = Cookies.getJSON(this.name) || [];
  }

  _createClass(Bisquits, [{
    key: 'add',
    value: function add(value) {
      if (this.hasValue(value) !== false) {
        return false;
      }

      var cookieObj = {};
      cookieObj[this.key] = value;
      this.cookie.push(cookieObj);
      Cookies.set(this.name, this.cookie);
      return this.cookie;
    }
  }, {
    key: 'remove',
    value: function remove(value) {
      var cursor = this.hasValue(value);

      if (cursor === false) return false;

      this.cookie.splice(cursor, 1);
      Cookies.set(this.name, this.cookie);
      return this.cookie;
    }
  }, {
    key: 'removeAll',
    value: function removeAll() {
      this.cookie = [];
      Cookies.remove(this.name);
      return true;
    }
  }, {
    key: 'hasValue',
    value: function hasValue(value) {
      for (var i = 0; i < this.cookie.length; i++) {
        if (this.cookie[i].hasOwnProperty(this.key)) {
          if (this.cookie[i][this.key] === value) return i;
        }
      }

      return false;
    }
  }]);

  return Bisquits;
})();

module.exports = Bisquits;
