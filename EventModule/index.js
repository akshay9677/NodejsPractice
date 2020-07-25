const ArrayEvent = require("./array-event-emitter");

const a = new ArrayEvent([12, 22]);

a.on("add", (a) => {
  console.log("Value added : " + a);
});
a.on("delete", (a) => {
  console.log("Value deleted : " + a);
});
a.on("iteration", (a) => {
  console.log(`Value at ${a} is`);
});

a.add(32);
a.add(42);
a.add(52);
a.delete();
var arr = [];
for (const i of a) {
  console.log(i);
}
