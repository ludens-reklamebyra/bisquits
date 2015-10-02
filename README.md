# bisquits
## Install
```
$ npm install --save https://github.com/ludens-reklamebyra/bisquits.git#v0.0.2
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
