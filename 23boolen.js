const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);

console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Scott is able to drive');
// }
// else {
//     console.log('Someone else should drive');
// }

const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Scott is able to drive');
}
else {
    console.log('Someone else should drive');
}
