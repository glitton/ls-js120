//1.

let qux1 = { foo: 1 };
let baz1 = Object.create(qux1);
console.log(baz1.foo + qux1.foo);
 
/*
The console logs 2.  qux.foo logs 1. Since baz.foo doesn't have it's own copy
of the foo property, JS searches for the foo property up the prototype chain
and finds it in qux. Thus baz.foo is also 1. 
*/

//2. 

let qux = { foo: 1 };
let baz = Object.create(qux);
baz.foo = 2;

console.log(baz.foo + qux.foo); //3
/*
The console logs 3.  qux.foo logs 1.  This time baz.foo was assigned a value of 2 
as a result, the property chain wasn't used.  Instead a new property was created
in the baz object called foo and assigned the value of 2
*/