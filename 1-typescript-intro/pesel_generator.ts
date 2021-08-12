import * as moment from 'moment'

function peselGen(birthDate: Date) {
    let pesel: string[] = [];
    const multipliedBy: number[] = [1,3,7,9,1,3,7,9,1,3];
    // let newDate: string = birthDate.slice(8) + birthDate.slice(3,5) + birthDate.slice(0,2);
    let newDate = moment(birthDate).format('YY-MM-DD');
    let dateArray: string[] = newDate.split("-");
    pesel.push(...dateArray)
    let x: string[] = (Math.floor(Math.random()*9000) + 1000).toString().split("");
    pesel.push(...x);
    let sumOfMultipliedArr: number[] = pesel.map(function(val, index) {
        return parseInt(val)*multipliedBy[index]
    });
    let sumOfMultiplied: number = sumOfMultipliedArr.reduce(function(prev,curr) {
        return prev + curr;
    });
    let checkSum: number = 10 - sumOfMultiplied%10;
    pesel.push(checkSum.toString());
    return pesel.join("");
}
export { peselGen }
