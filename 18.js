const age = 13;
const drivingAge = 16;
const isOldEnough = age >= drivingAge;

if (isOldEnough) {
    console.log('Sarah is old enough for a drivers license 😜')
}
else {
    const yearsLeft = drivingAge - age;
    console.log(`Sarah is ${age}, she has ${yearsLeft} years left, until she is old enough to drive.😜😢`);
}
const birthYear = 2001;
let century;

if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century);


// const birthYear = 1971;
// let timeMachine;
// let justAnotherVar;

// if (birthYear <= 2000) {
//     let timeMachine = 20;
//     let justAnotherVar = 5;
//     console.log('under 2000')
// }
// console.log(timeMachine, justAnotherVar);


