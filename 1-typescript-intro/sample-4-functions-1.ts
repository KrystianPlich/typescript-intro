function add(...args: number[]): number {
    return [...args].reduce(function(x,y) {
        return x+y;
    });
}

console.log(add(Math.random(), Math.random()))

export { add }

/* Zmodufikuj funkcję add aby mogła przyjmować dowolną liczbę argumentów */
