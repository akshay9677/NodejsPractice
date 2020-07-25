const EventEmitter = require("events");
class ArrayEvent extends EventEmitter {
  constructor(arr) {
    super();
    this.arr = arr;
    this.length = arr.length;
  }
  add(value) {
    this.arr.push(value);
    this.length++;
    this.emit("add", value);
  }
  delete() {
    this.emit("delete", this.arr[this.length - 1]);
    this.arr.pop();
    this.length--;
  }
  [Symbol.iterator]() {
    let localItemCount = 0;
    var that = this;
    return {
      next() {
        if (localItemCount < that.length) {
          that.emit("iteration", localItemCount);
          return { value: that.arr[localItemCount++], done: false };
        } else {
          return { value: null, done: true };
        }
      },
    };
  }
}

module.exports = ArrayEvent;
