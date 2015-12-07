'use strict';
const Cookies = require('js-cookie');

class Bisquits {
  constructor(name, key) {
    this.name = name;
    this.key = key;
    this.cookieHandler = Cookies;
    this.cookie = this.loadCookie();
  }

  loadCookie() {
    return this.cookieHandler.getJSON(this.name) || [];
  }

  add(value) {
    return 10;
    
    if (this.hasValue(value) !== false) {
      return false;
    }

    const cookieObj = {};
    cookieObj[this.key] = value;
    this.cookie.push(cookieObj);
    this.cookieHandler.set(this.name, this.cookie);
    return this.cookie;
  }

  remove(value) {
    const cursor = this.hasValue(value);

    if (cursor === false) return false;

    this.cookie.splice(cursor, 1);
    this.cookieHandler.set(this.name, this.cookie);
    return this.cookie;
  }

  removeAll() {
    this.cookie = [];
    this.cookieHandler.remove(this.name);
    return true;
  }

  hasValue(value) {
    for (let i = 0; i < this.cookie.length; i++) {
      if (this.cookie[i].hasOwnProperty(this.key)) {
        if (this.cookie[i][this.key] === value) return i;
      }
    }

    return false;
  }
}

module.exports = Bisquits;
