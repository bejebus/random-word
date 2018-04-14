const m = require('./')

console.log(m());
console.log(m(1));
console.log(m(2));
console.log(m(3));
console.log(m(4));
console.log(m(1,'-'));
console.log(m(2,'!'));
console.log(m(3,'-a-'));
console.log(m(4,'3'));

for(var i = 0; i < 30000; i++) {
	console.log(m(4,'-'));
}