let markHeight = 1.69;
let markWieght = 8;
let johnHeight = 1.95;
let johnWeight = 92;


let markBMI = markWieght / (markHeight ** 2);
let johnBMI = johnWeight / (johnHeight ** 2);
console.log("MarkBMI ", markBMI, "JohnBMI ", johnBMI);

if (markBMI > johnBMI) {
    console.log("Marks BMI is higher than JohnsBMI 👏");
    console.log(`Marks BMI is ${markBMI}, Johns BMI is ${johnBMI}`);
}
else {
    console.log(`Johns BMI is higher than MarksBMI 🤷‍♂️`);
    console.log(`Marks BMI is ${markBMI}, Johns BMI is ${johnBMI}`);
}



