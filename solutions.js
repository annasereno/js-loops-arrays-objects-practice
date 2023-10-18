"use strict";

/**
 * Write your solutions here
 *
 */

//1
function isNumber(x){
	if (typeof x === "number"){
		return true;
	}
	return false;
}

// console.log(isNumber(5)); // outputs true
// console.log(isNumber("bob")); // outputs false
// console.log(isNumber(true)); // outputs false

//2
function sumOfStringLengths(strings) {
	let sum = 0;
	for (let i = 0; i < strings.length; i++) {
		sum += strings[i].length;
	}
	return sum
}
// console.log(sumOfStringLengths([""])); // outputs 0
// console.log(sumOfStringLengths(["the", "big", "pizza"])); // outputs 11

//3
function findTheFirstNumber(array){
	for (let i = 0; i < array.length; i++) {
		if (isNumber(array[i]) === true)
			return i;
	}
	return -1;
}
// console.log(findTheFirstNumber(["the", "big", 3, "pizza"])); // outputs 2
// console.log(findTheFirstNumber(["the", "big", "pizza"])); // outputs -1
// console.log(findTheFirstNumber([1, "x", 2, "y"])); // outputs 0

//4
function makePerson(first, last, num){
	const person = {
		firstName: first,
		lastName: last,
		age: num
	}
	return person;
}
// console.log(makePerson("bob", "smith", 42));
// outputs { firstname: 'bob', lastname: 'smith', age: 42 }

//5
function getFullName(obj){
	return `${obj.firstname} ${obj.lastname}`;
}
// console.log(getFullName({
// 	firstname: "Bob",
// 	lastname: "smith"
// })); // outputs Bob smith
//
// console.log(getFullName({
// 	firstname: "RAGNAR",
// 	lastname: "Jonez",
// 	age: 42
// })); // outputs RAGNAR Jonez

//6
function getAverageAge(array){

}
