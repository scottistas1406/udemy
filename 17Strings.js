const firstName = "Scott";
const job = "CTO";
const birthyear = 1971;
const year = 2023;

const scott = "I'm " + firstName + ', a ' + (year - birthyear) + " years old " + job;
console.log(scott);

const scottNew = `I'm ${firstName}, a ${year - birthyear} years old ${job}`;
console.log(scottNew);