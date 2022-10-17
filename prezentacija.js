// PRIMJER 1 - Vizuelni prikaz izvrsavanja koda

const num = 3;
function multipleBy2 (input) {
    const result = input * 2;
    return result;
}

const output = multipleBy2(num); // 6
const newOutput = multipleBy2(10); //20

// PRIMJER 2 - High order functions

function calculate(numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}


calculate([1, 2, 4]); // 7

function calculate2(operation, initialValue, numbers) {
    let total = initialValue;
    for (const number of numbers) {
        total = operation(total, number)
    }
    return total;
}

function sum(n1, n2) {
    return n1+n2;
}

function multiple(n1, n2) {
    return n1*n2;
}

calculate2(sum, 0, [1, 2, 4]) // 7
calculate2(multiple, 1, [1, 2, 4]) // 8

// primjer iz prakse je map funkcija koja nam omogucava da prodjemo kroz niz elemenata
// izvrsavajuci callback funkciju koju smo proslijedili kao argument nad svakim elementom niza

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1); // [2, 8, 18, 32]

// PRIMJER 3 - CLOSURE

function outer() {
    let counter = 0;
    function increment() { 
        console.log('hehe')
    }
    return increment;
}

const myFunc = outer();
myFunc();
myFunc();
