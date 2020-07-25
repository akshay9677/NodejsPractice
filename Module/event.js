const EventEmitter = require("events");
const event = new EventEmitter();
event.on("add", (a) => {
  console.log(a);
});
event.on("delete", (a) => {
  console.log(a);
});
class ArrayEvent extends EventEmitter {
  constructor(arr) {
    super();
    this.arr = arr;
    this.length = arr.length;
  }
  add(value) {
    this.arr.push(value);
    this.length++;
    event.emit("add", this.arr);
  }
  delete() {
    this.arr.pop();
    this.length--;
    event.emit("delete", this.arr);
  }
  [Symbol.iterator]() {
    let localItemCount = this.length;
    var that = this;
    return {
      next() {
        if (localItemCount > 0) {
          localItemCount--;
          return { value: that.arr[localItemCount], done: false };
        } else {
          return { value: null, done: true };
        }
      },
    };
  }
}

var a = new ArrayEvent([]);
a.add(22);
a.add(32);
a.add(42);
a.delete();
for (var i of a) {
  console.log(i);
}
