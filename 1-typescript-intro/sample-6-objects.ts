import * as moment from 'moment'

interface Context {
    name: string
}
interface LoggerInterface {
    message: string;
    context: Context;
}
class Logger implements LoggerInterface {
    message: string;
    context: Context;
    constructor (currentContext: Context) {
        this.context = currentContext;
        console.log(`Logger for ${this.context.name} initialized`);
    }
    log(message) {
        console.log( `${this.context.name}: ${message}`);
    }
}

let currentModule:Context = { name: "sample-4-objects"}
let logger: Logger = new Logger(currentModule);

logger.log("Start logging...");

/* TODO: Dodaj wyświetlanie komunikaty "Logger for ... initialized" w konstruktorze obiektu Logger */

interface ComplexInterface {
    level: number;
    color?: string; // optional propery
    [idx: number]: string;  // array of string values
    [propName: string]: any; // any additional properties of any type
    getField(): number; // function
}

class ComplexClass implements ComplexInterface {
    [idx: number]: string;    [propName: string]: any;
    level: number;
    color?: string;
    getField(): number {
        throw new Error("Method not implemented.");
    }
}

/* TODO: Zdefiniuj interface dla klasy Logger, więcej informacji możesz znaleźć na stronie https://www.typescriptlang.org/docs/handbook/interfaces.html */

// Zadanie: Stwórz klasę generators udostępniającą metodę generującą pesel

class generators {
    pesel: string[];
    newDate: string;
    dateArray: string[];
    x: string[];
    sumOfMultipliedArr: number[];
    sumOfMultiplied: number;
    checkSum: number;
    generatePesel(birthDate: Date): string {
        let multipliedBy = [1,3,7,9,1,3,7,9,1,3];
        this.pesel = [];
        this.newDate = moment(birthDate).format('YY-MM-DD');
        this.dateArray = this.newDate.split("-");
        this.pesel.push(...this.dateArray)
        this.x = (Math.floor(Math.random()*9000) + 1000).toString().split("");
        this.pesel.push(...this.x);
        this.sumOfMultipliedArr = this.pesel.map(function(val, index) {
            return parseInt(val)*multipliedBy[index]
        });
        this.sumOfMultiplied = this.sumOfMultipliedArr.reduce(function(prev,curr) {
            return prev + curr;
        });
        this.checkSum= 10 - this.sumOfMultiplied%10;
        this.pesel.push(this.checkSum.toString());
        return this.pesel.join("");
    }
}

let pesGen: generators = new generators()
console.log(pesGen.generatePesel(new Date("1994-05-30")));