# bisquits
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
