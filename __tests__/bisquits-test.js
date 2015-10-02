'use strict';
jest.dontMock('../src/Bisquits.js');

describe('Bisquits', function() {
  beforeEach(function() {
    require('js-cookie').__setCookie([{'test': 'balle'}, {'test': 'kahoon'}]);
  });

  describe('constructor', function() {
    it('should set cookie to an array of two objects', function() {
      let Bisquits = require('../src/Bisquits.js');
      let bisquits = new Bisquits('tests', 'test');
      expect(bisquits.cookie.length).toBe(2);
    });
  });

  describe('add', function() {
    it('should add one element to the cookie', function() {
      let Bisquits = require('../src/Bisquits.js');
      let bisquits = new Bisquits('tests', 'test');
      expect(bisquits.add('stein').length).toBe(3);
      expect(bisquits.cookieHandler.set.mock.calls[0][1].length).toBe(3);
      expect(bisquits.cookieHandler.set.mock.calls[0][1][2].test).toBe('stein');
    });
  });

  describe('remove', function() {
    it('should remove one element from the cookie', function() {
      let Bisquits = require('../src/Bisquits.js');
      let bisquits = new Bisquits('tests', 'test');
      expect(bisquits.remove('balle').length).toBe(1);
      expect(bisquits.cookieHandler.set.mock.calls[0][1].length).toBe(1);
      expect(bisquits.cookieHandler.set.mock.calls[0][1][0].test).toBe('kahoon');
    });

    it('should return false if no element is found', function() {
      let Bisquits = require('../src/Bisquits.js');
      let bisquits = new Bisquits('tests', 'test');
      expect(bisquits.remove('hoylander')).toBe(false);
      expect(bisquits.cookieHandler.set.mock.calls.length).toBe(0);
    })
  });

  describe('removeAll', function() {
    it('should remove all elements from the cookie', function() {
      let Bisquits = require('../src/Bisquits.js');
      let bisquits = new Bisquits('tests', 'test');
      expect(bisquits.removeAll()).toBe(true);
      expect(bisquits.cookie.length).toBe(0);
      expect(bisquits.cookieHandler.remove.mock.calls[0][0]).toBe('tests');
    });
  });

  describe('hasValue', function() {
    it('should return the index of a value that exists in the cookie', function() {
      let Bisquits = require('../src/Bisquits.js');
      let bisquits = new Bisquits('tests', 'test');
      expect(bisquits.hasValue('kahoon')).toBe(1);
      expect(bisquits.hasValue('boyah')).toBe(false);
    });
  });
});
