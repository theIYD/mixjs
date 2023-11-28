### Functions, this

Invocation types of a function:

- Normal function

```js
function example() {
  console.log("Hello World!");
}
example();
```

- Method in an object

```js
const obj = {
  type: "abc",
  displayType: function () {
    console.log(this.type);
  },
};
obj.displayType();
```

- Constructor

```js
const num = new Number("10");
```

- call, apply, bind

```js
function example(arg1, arg2) {
  console.log(arg1 + arg2);
}
example.call(undefined, 10, 20);
```

#### This

- The value of "this" is decided upon the type of invocation. Each invoke creates its own context and decides the value. "strict mode" affects the behaviour as well.

##### When invoked as a normal function

- normal mode: `this === window / global`
- strict mode: `this === undefined`

##### When invoked as an IIFE

- normal mode: `this === window / global`
- strict mode: `this === undefined`

##### When invoked as a method in an object

- normal mode: `this === object`

NOTE: The context is set at runtime i.e the value can be updated manually.

##### When invoked as a constructor

Objects created with a "new" keyword always result in "this" referring to the newly created object.

##### When invoked via _call_, _bind_, _apply_

The value of "this" is what is passed as an argument to the call, apply and bind method.

- Runtime binding: Using _call_ and _apply_ methods, we can invoke the function with the new context. The values will be attached to that execution only.

- Permanent binding: When using _bind_, we can create a new function with the new values and store it in a variable, and then use it further. It does not affect the original function.

##### When object with a method is passed as a reference

Context is shared between both the original and one that has the reference.

##### When method is extracted out from an object

If the method is extracted and saved to a variable, the variable will now act as a normal function. Hence, value of this now points to window / global.

The above behaves the same way when extracted method is passed to timers i.e setTimeout, setInterval.

---

To access the value of the parent, we can use either Fat Arrow functions or indirect invocation technique using call and apply.

#### Fat Arrow functions

- Do not have "this" of its own, it accesses "this" in its nearest scope.

```js
const example = {
  blog: "abc",
  displayBlog: function () {
    const inner = () => {
      // this refers to the example object
      console.log(this === example);
      console.log(this.blog);
    };
    inner();
  },
};
example.displayBlog();
```
