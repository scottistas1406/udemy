const day = 'Monday2';
const day2 = 'Tuesday';
const day3 = 'Wed';
const day4 = 'Thursday';
const day5 = 'Friday';
const day6 = 'Sat';
const day7 = 'Sun';

switch (day) {
    case 'Monday':
        console.log('Plan course structure');
        console.log('go to coding meet up')
        break;
    case 'Tuesday':
        console.log('prepare videos');
        break;
    case 'Wed':
    case 'Thursday':
        console.log('write code examples')
        break
    case 'Friday':
        console.log('record videos');
        break;
    case 'Sat':
    case 'sun':
        console.log('enjoy the weekend')
        break
    default:
        console.log('no day, its the end of time')

}
if (day == 'Monday') {
    console.log('Plan course structure');
    console.log('go to coding meet up')
}
else if (day == 'Tuesday') {
    console.log('prepare videos');
}
else if (day == 'Wed' || day == 'Thursday') {
    console.log('write code examples')
}
else if (day == "Fri") {
    console.log('record videos');

}
else if (day == 'Sat' || day == 'Sun') {
    console.log('enjoy the weekend')
}
else { console.log('not a valid day') }