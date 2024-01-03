//const generate_a_rand_name = require('sillyname');
import superheroes from 'superheroes';
import generateName from 'sillyname';

var sillyn = generateName();
var supername = superheroes.random();


console.log(`My name is ${sillyn}`);
console.log(`My name is from a ${supername}!`);