/*
 * @Author: HEXIAYUE
 * @Date: 2024-01-18 15:01:34
 * @Description: Do not edit
 * @LastEditors: HEXIAYUE
 * @LastEditTime: 2024-01-18 15:15:55
 */
// 变量的解构赋值
let [a, b, c] = [1, 2, 3];
console.log("a", a);
console.log("b", b);
console.log("c", c);

let [foo, [[bar], baz]] = [1, [[2], 3]];
foo; // 1
bar; // 2
baz; // 3

let [, , third] = ["foo", "bar", "baz"];
third; // "baz"

let [x, , y] = [1, 2, 3];
x; // 1
y; // 3

let [head, ...tail] = [1, 2, 3, 4];
head; // 1
tail; // [2, 3, 4]

let [x, y, ...z] = ["a"];
x; // "a"
y; // undefined
z; // []

let [x, y, z] = new Set(["a", "b", "c"]);
x; // "a"
y; // "b"
z; // "c"

// 默认值
// 解构赋值允许指定默认值。

let [foo = true] = [];
foo; // true

let [x, y = "b"] = ["a"]; // x='a', y='b'
let [x, y = "b"] = ["a", undefined]; // x='a', y='b'

// 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

// 这实际上说明，对象的解构赋值是下面形式的简写（参见《对象的扩展》一章）。
let { foo: foo, bar: bar } = { foo: 'aaa', bar: 'bbb' };

let { foo: baz } = { foo: "aaa", bar: "bbb" };
baz; // "aaa"
foo; // error: foo is not defined
