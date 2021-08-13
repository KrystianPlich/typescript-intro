import "jasmine";
import { peselGen } from '/home/tester/JS/typescript-intro/1-typescript-intro/pesel_generator'

describe("Gen test", () => {
    it("should return string with lenght of 11", () => {
        expect(peselGen(new Date('1990-02-01')).length).toBe(11);
    });
});

// Zadanie: Napisz test dla stworzonego generatora