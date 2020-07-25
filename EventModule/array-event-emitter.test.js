const ArrayEvent = require("./array-event-emitter");

test("Array Event Emitter test cases", () => {
  var a = new ArrayEvent([13, 23]);
  a.add(33);
  a.add(43);
  a.add(53);
  a.delete();
  var arr = [];
  for (const i of a) {
    arr.push(i);
  }
  expect(arr).toStrictEqual([13, 23, 33, 43]);
});
