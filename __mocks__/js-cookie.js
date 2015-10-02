'use strict';
const cookieMock = jest.genMockFromModule('js-cookie');
let _mockedCookie = [];

function __setCookie(cookie) {
  _mockedCookie = cookie;
}

function getJSON() {
  return _mockedCookie;
}

cookieMock.getJSON.mockImplementation(getJSON);
cookieMock.__setCookie = __setCookie;
module.exports = cookieMock;
