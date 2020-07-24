import greet, { func, last } from "./util";

test("Util function check", () => {
  var firstName = "Akshay";
  var lastName = "Kannan";
  var str = `${greet()}${func(firstName)}${last(lastName)}`;
  expect(str).toBe("Hello, Akshay Kannan !!! ");
});
