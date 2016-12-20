type check by flow && DbC by assert
===================================

setup
-----

```js
yarn
```

execute
-------

### type check

```js
yarn run type-check
```

### at dev

```js
yarn run build
```

then

```
node ./dist/type-violation.js
// or
node ./dist/contract-violation.js
```

### at production

```js
NODE_ENV=production yarn run build
```

then

```
node ./dist/type-violation.js
// or
node ./dist/contract-violation.js
```

test
----

```js
yarn run test
```
