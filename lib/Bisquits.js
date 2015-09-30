const Cookies = require('js-cookie');

class Bisquits {
  constructor(name, key) {
    this.name = name;
    this.key = key;
    this.cookie = Cookies.getJSON(this.name) || [];
  }

  add(value) {
    if (this.hasValue(value) !== false) {
      return false;
    }

    const cookieObj = {};
    cookieObj[this.key] = value;
    this.cookie.push(cookieObj);
    Cookies.set(this.name, this.cookie);
    return this.cookie;
  }

  remove(value) {
    const cursor = this.hasValue(value);

    if (cursor === false) return false;

    this.cookie.splice(cursor, 1);
    Cookies.set(this.name, this.cookie);
    return this.cookie;
  }

  removeAll() {
    this.cookie = [];
    Cookies.remove(this.name);
    return true
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
