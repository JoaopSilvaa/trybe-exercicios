"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = exports.trapeze = exports.diamond = exports.retangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
;
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(side) {
    return side ** 2;
}
exports.square = square;
;
function retangle(base, height) {
    return base * height;
}
exports.retangle = retangle;
;
function diamond(larger, smaller) {
    return (larger * smaller) / 2;
}
exports.diamond = diamond;
;
function trapeze(baseLarger, baseSmaller, height) {
    return ((baseLarger + baseSmaller) * height) / 2;
}
exports.trapeze = trapeze;
;
function circle(radius) {
    return (radius ** 2) * 3.14;
}
exports.circle = circle;
;
