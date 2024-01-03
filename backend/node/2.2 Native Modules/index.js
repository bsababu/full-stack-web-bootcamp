const { error } = require("console");

const generate_a_rand_name = require('sillyname');
var sillyn = generate_a_rand_name();
const file_system = require("fs");

// file_system.writeFile("msg.txt","hello fs", (err) => {
//     if(err) throw err;
//     console.log("file written on");
// });

// file_system.readFile("./msg.txt","utf-8",(err, dat) => {
//     if(err) throw err;
//     console.log(dat);
// })

console.log(`My name is ${sillyn}`);