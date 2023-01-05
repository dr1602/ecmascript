const string = 'Hello';

console.log(string.padStart(7, 'hi'));
console.log(string.padStart(5, 'hi'));
console.log(string.padStart(8, 'hi'));
console.log(string.padStart(10, 'hi'));
console.log(string.padStart(4, 'hi'));
console.log(string.padStart(2, 'hi'));
console.log(string.padStart(0, 'hi'));
console.log(string.padStart(20, '__'));

console.log(string.padEnd(6, 'hi'));
console.log(string.padEnd(8, 'hi'));
console.log(string.padEnd(12, '*'));