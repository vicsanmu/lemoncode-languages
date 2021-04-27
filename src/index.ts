import { head, tail, init, last } from './exercise1';
import { concat, concatMultiple } from './exercise2';
import { clone, merge } from './exercise3';
import { isBookRead } from './exercise4';
import { SlothMachine } from './exercise5';
import { Book } from './models/Book';

const exampleArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const exampleArray2: number[] = [2, 4, 6, 8, 10];
const exampleArray3: number[] = [1, 3, 5, 7, 9];

console.log('Ejercicio1');
console.log('Resultado del método head:', head(exampleArray));
console.log('Resultado del método tail:', tail(exampleArray));
console.log('Resultado del método init:', init(exampleArray));
console.log('Resultado del método last:', last(exampleArray));

console.log('Ejercicio2');
console.log('Resultado del método concat:', concat(exampleArray, exampleArray2));
console.log('Resultado del método concatMultiple:', concatMultiple(exampleArray, exampleArray2, exampleArray3));

const exampleObject: any = {
    name: 'Victor',
    type: 'Estudiante',
    school: 'LemonCode'
};

const exampleObject2: any = {
    name: 'Pepe',
    type: 'Teacher',
    university: 'Oxford'
};

console.log('Ejercicio3');
console.log('Resultado del método clone:', JSON.stringify(clone(exampleObject)));
console.log('Resultado del método merge:', JSON.stringify(merge(exampleObject, exampleObject2)));

const books: Book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true }
];

console.log('Ejercicio4');
console.log('Resultado del método isBookRead con título Devastación:', isBookRead(books, "Devastación"));
console.log('Resultado del método isBookRead con título Devastación:', isBookRead(books, "Canción de hielo y fuego"));
console.log('Resultado del método isBookRead con título Devastación:', isBookRead(books, "Los Pilares de la Tierra"));

console.log('Ejercicio5');
const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();