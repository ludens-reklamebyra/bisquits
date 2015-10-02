# bisquits
[![Build Status](https://travis-ci.org/ludens-reklamebyra/bisquits.svg?branch=master)](https://travis-ci.org/ludens-reklamebyra/bisquits)

Add or remove a k,v in a cookie array.
## Install
```
$ npm install --save bisquits
```
## Use
```javascript
var bisquits = new Bisquits('cookies', 'cookie');
bisquits.add('chocolate');

// Becomes:
{
  cookies: [
    {
      cookie: 'chocolate'
    }
  ]
}
```
