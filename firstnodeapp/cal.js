// exports.add = function(x,y){
//  return x+y;
// }

// let n = 7;

// let nr = 2*n - 1; //13
// let nc = 2*n - 1

// let final_ans = "";
// for(let row = 0; row < nr; row++) {	
// 	for(let col  = 0; col < nc; col++) {

// 		let v = row < col ? row : col;
// 		v = v < nr - row ? v : nr - row - 1;
// 		v = v < nr - col - 1 ? v : nr - col - 1; 

// 		final_ans += n - v; 
// 	}

// 	final_ans += "\n";
// }
// console.log(final_ans);


let arr = ['a','b','c','a','c','d','a'];

let obj ={};

// arr.map( items =>{

// 	if(obj[items]){
// 		obj[items] +=1
// 	}
// 	else{
// 		obj[items] = 0;
// 	}
// });

// for(i=0;i< arr.length;i++){
// 	obj[arr[i]] = 1;
// }

// console.log(Object.keys(obj));

// const myArray = ['h', 'e', 'l', 'l', 'o'];

// console.log(myArray[0]);
// console.log(myArray[4]);
// myArray[9] = 'm';
// console.log(myArray);

// const city1 = ['London', 'Mumbai', 'Chennai', 'Kolkata']; 

// city1[1] = 'Delhi';

// console.log(city1);

// const city = ['London', 'Mumbai', 'Chennai', 'Kolkata']; 

// city[1] = 'Delhi';

// console.log(city);

// city[4] = ['mam', 'hello'];

// console.log(city);

// city.push('California'); //push is for adding elements in the end. 

// console.log(city);

// city.pop();

// console.log(city);


// const person = {
// 	name: 'John',
// 	age: 20,
// 	greet : function() {
// 		console.log('hello');
// 	}
// };

// person.car = 20;
// person.rizwan = 20;
// console.log(person);
// console.log(typeof person);
// person.greet();

// const persons = {
// 	name: 'John',
// 	age: 20,
// 	1: 35
// };

// for(let key in persons) {
	
// 	console.log(key);
// 	console.log(persons[key]);
// }

// for(let value in persons) {
	
// 	console.log(value);
// 	console.log(persons[value]);
// }

// const keys = Object.keys(persons);

// console.log(keys);


// const animals = {lion: 1, giraffe: 2};

// console.log(Object.entries(animals)[0]);

// console.log(Object.values(animals));


// const target = {a: 1, b : 2};
// const source = {b: 4, d: 4};

// let obj1 = Object.assign(target, source);

// console.log(obj1);



// function removeDuplicates(arr) {
	
// 	let obj = {};

// 	for(let i = 0; i < arr.length; i++) {
// 		if(obj[arr[i]]) {   //checking if the current character is present in obj
// 			obj[arr[i]] =  1;
// 		}else{
// 			obj[arr[i]] = 1;
// 		}
// 	}
// 	console.log(obj)
// 	return Object.values(obj);
// }

// arr1 = ['a', 'b', 'c', 'a', 'c', 'd', 'a'];
// console.log(removeDuplicates(arr1));

// function hello(){
// 	return "hello";
// }

// const person = {
// 	name: 'John',
// 	age: 20,
// 	greet :hello()
// 	};

// 	console.log(person);



// 	console.log(Object.is(0n, -0n));



// const text1 = "my name is rizwan." 
// console.log(text1.slice(0,-1));

// const arrvalue = ['java','c','c++'];
// console.log(arrvalue.splice(1,0,'script','valuw'));
// console.log(arrvalue + text1.length);



// const arrayvalue  = { name: 'rizwan', age : 25 , subject :{sub1 : 'eng', sub2 :'tamil'}};

// let {subject } = arrayvalue;
// console.log(subject);

// const [name ]

function rearrangeArray(arr, n) {

    arr.sort(); //1 2 3 3 5

    let result = [];

    let p = 0;
    let q = n - 1;

    for(let i = 0; i < n; i++) {

        if ((i + 1) % 2 == 0) {
            result[i] = a[q--];
        }else{
            result[i] = a[p++];
        }
     }
    return result;
}

let a = [ 1, 3, 2, 2, 5 ,8,9,5];
let n = a.length;
console.log(rearrangeArray(a, n));
