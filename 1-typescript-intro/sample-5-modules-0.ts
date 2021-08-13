import { add } from "./sample-4-functions-1"

console.log(add(Math.random(), Math.random()))

// Wicej na stronie https://www.typescriptlang.org/docs/handbook/modules.html

// Zadanie: Stwórz moduł udestępniający funkcję generującą pesel

import { peselGen } from "./pesel_generator"

console.log(peselGen('21/01/1996'))