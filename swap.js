let a = 5;
let b = 8;
console.log(a,b);
// a = b;
// b=a;

const temp = a;
a = b;
b = temp;

console.log(a,b);


let x =9;
let y = 10;
console.log(x,y);

[x,y] = [y,x];
console.log(x,y);
