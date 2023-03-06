let markHeight = 1.69;
let markWieght = 78;
let johnHeight = 1.95;
let johnWeight = 92;


let markBMI = markWieght / (markHeight ** 2);
let johnBMI = johnWeight / (johnHeight ** 2);
console.log("MarkBMI ", markBMI, "JohnBMI ", johnBMI);

let markHigherBMI = johnBMI > markBMI;
console.log(markHigherBMI);
