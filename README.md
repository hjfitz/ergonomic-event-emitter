# Ergo Event Emitter

A small lib to work with events ergonomically, rather than defining a function for each on$thing

Enables you to call:

```ts
const emitter = createErgoEmitter()

// equivalent to emitter.on('something', cb)
emitter.onSomething(() => console.log('ran!')

emitter.emit('something')
```

Without any additional legwork. Unless you use TypeScript.

---

This library makes use of JavaScript [proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) that intercept the call and map it to an event.
