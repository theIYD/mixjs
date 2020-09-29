// jQuery method chaining with css()
function chain(elem) {
  return {
    css: function (property, value) {
      elem.style[property] = value;
      return this; // here this binds to parent method in order to chain again
    },
  };
}
