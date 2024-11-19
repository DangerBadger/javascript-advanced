'use strict';

const countriesArr = ['Russia', 'USA', 'Great Britain', 'USA', 'Russia'];
const countriesSet = new Set(countriesArr);

console.log(countriesSet);
console.log(countriesSet.size);
console.log(countriesSet.has('Russia'));

countriesSet.add('France');

console.log(countriesSet);

countriesSet.delete('Great Britain');

console.log(countriesSet);

// countriesSet.clear();

for (const country of countriesSet) {
  console.log(country);
}

console.log([...countriesSet]);

const objectsSet = new Set([{ a: 1 }, { b: 2 }, { b: 2 }]);
console.log(objectsSet);

const stringSet = new Set('abcda');
console.log(stringSet);