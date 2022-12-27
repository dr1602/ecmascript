// para saber si en un array se encuentra un elemento

let numbers = [1, 3, 4, 6, 7, 8];

console.log(numbers.includes(4));

console.log(numbers.includes(9));

// segundo ejemplo de 'includes'

const list = ['oscar', 'David', 'Ana'];

console.log(list.includes('oscar'));

console.log(list.includes('Oscar'));

// los strings no son iguales, pues combina upper y lower case pero se pueden bajar a lower case para que sea más fácil, como números en strings, es una buen práctica

// para saber si en un objeto existen ciertas propiedades

const letras = { a: 1, b: 2, c: 3};

'a' in letras; //true
// evalúa todas las propiedades del objeto y del prototipo
letras.hasOwnProperty('a'); //true
//evalúa sólamente las propiedades del objeto, pero puede colisionar con alguna otra propiedad del prototipo
Object.hasOwn(letras,'a'); //true
//última versión, y se recomienda usar si el navegador lo soporta

'toString' in letras; //true
letras.hasOwnProperty('toString'); //false
Object.hasOwn(letras, 'toString'); //false

// otro ejemplo con varios emojis

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(
	familyEmoji.includes("👨"),
	familyEmoji.includes("👩"),
	familyEmoji.includes("👦")
);

// 