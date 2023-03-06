const dg1Score = 112;
const dg2Score = 108;
const dg3Score = 89;
const kg1Score = 111;
const kg2Score = 108;
const kg3Score = 89;
const minScore = 100;

const dolphinsAverage = (dg1Score + dg2Score + dg3Score) / 3;
const koalasAverage = (kg1Score + kg2Score + kg3Score) / 3;
console.log('dolphins', dolphinsAverage);
console.log('koalas', koalasAverage);
if (dolphinsAverage > koalasAverage && dolphinsAverage != koalasAverage && dolphinsAverage >= 100) {
    console.log(`Dolphins win ✨✨✨🎁 with the average score of ${dolphinsAverage}`)
}
else if (dolphinsAverage < koalasAverage && dolphinsAverage != koalasAverage && koalasAverage >= 100) {
    console.log(`Koalas win with✨✨✨🎁 an average score of ${koalasAverage}`);
}
else if (dolphinsAverage == koalasAverage && koalasAverage >= minScore && dolphinsAverage >= minScore) {
    console.log(`Its a tie!!`)
}
else { console.log(`sorry no one reach the min 100 points,dolphins ${dolphinsAverage}, koalas ${koalasAverage}, `) } //consle



