const Heap = require("./Heap");

let arguments = process.argv.splice(2);

let options = {}

let argmap = [
	{flag:"-o",name:"outputFile",length:2},
]

for (let i = 0; i < arguments.length; i++) {
for (let j = 0; j < argmap.length; j++) {
	
	if(argmap[j].flag == arguments[i]){
		let arr = arguments.splice(i,argmap[j].length);
		arr.shift();
		options[argmap[j].name] = arr;
	}
}

	
}

let x = new Heap(function(a,b){return a - b});

x.add(1);
x.add(0);
x.add(3);
x.add(4);
x.add(2);
x.add(11);
x.add(9);
x.remove();

console.log("--");
x.debug();
console.log(options);
