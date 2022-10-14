//Closures, Scope, and Execution Context

// CHALLENGE 1

// Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello". 
// When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.

function createFunction() {
  function helloWorld() {
    console.log('hello');
  }
  return helloWorld;
}

const function1 = createFunction();
function1(); // => should console.log('hello');


console.log('-----------------------------------')


// CHALLENGE 2

// Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should 
// print out the input that was used when the function was created.

function createFunctionPrinter(input) {
  function print() {
    console.log(input);
  }
  return print;
}

const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');


console.log('-----------------------------------')

// CHALLENGE 3

// Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope.
// Uncomment those lines of code. Try to deduce the output before executing. Now we are going to create a function addByX that returns a function that will add an input by x.

function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

willCounter(); // 1
willCounter(); // 2
willCounter(); // 3

jasCounter(); // 1
willCounter(); // 4


function addByX(x) {
  function add(n) {
    console.log('x+n => ', x + n)
    return x + n;
  }
  return add;
}

const addByTwo = addByX(2);
addByTwo(1); // => should return 3
addByTwo(2); // => should return 4
addByTwo(3); // => should return 5

const addByThree = addByX(3);
addByThree(1); // => should return 4
addByThree(2); // => should return 5

const addByFour = addByX(4);
addByFour(4); // => should return 8
addByFour(5); // => should return 9


console.log('-----------------------------------')

// CHALLENGE 4

// Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should 
// call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the 
// output value from the first time it was called.

function once(func) {
  var counter = 0;
  var currValue = 0;

  function executeOnce(n) {
    counter++;
    if (counter == 1) {
      currValue = func(n);
      return currValue;
    } else {
      return currValue;
    }
  }
  return executeOnce;
}

const onceFunc = once(addByTwo);
console.log(onceFunc(4)); // => should log 6
console.log(onceFunc(10)); // => should log 6
console.log(onceFunc(9001)); // => should log 6

console.log('-----------------------------------')

// CHALLENGE 5

// Write a function after that takes the number of times the callback needs to be called before being executed as the 
// first parameter and the callback as the second parameter.

function after(count, func) {
  var counter = 0;

  function callAfter() {
    counter++;
    if (counter == count) {
      console.log('hello')
    }
  }
  return callAfter;
}

const called = function () {
  console.log('hello')
};
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed

console.log('-----------------------------------')

// CHALLENGE 6

// Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be 
// invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();

function delay(func, wait) {
  function timeoutDelay() {
    setTimeout(() => {
      console.log('-----------------------------------')
      func();
    }, wait)
  }
  return timeoutDelay;
}

const afterDelay = delay(() => console.log('Delayed hello'), 3000);
afterDelay();

// CHALLENGE 7

// Write a function rollCall that accepts an array of names and returns a function. The first time the returned function is invoked, it should 
// log the first name to the console. The second time it is invoked, it should log the second name to the console, and so on, until all names have 
// been called. Once all names have been called, it should log 'Everyone accounted for'.

function rollCall(names) {
  var counter = 0;

  function callSomeone() {
    if (counter < names.length) {
      console.log(names[counter]);
    } else {
      console.log('Everyone accounted for');
    }
    counter++;
  }
  return callSomeone;
}

const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // => should log 'Victoria'
rollCaller() // => should log 'Juan'
rollCaller() // => should log 'Ruth'
rollCaller() // => should log 'Everyone accounted for'


// CHALLENGE 8

// Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). saveOutput 
// will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. 
// When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values.

function saveOutput(func, magicWord) {
  var obj = {};

  function returnOutput(value) {
    if (magicWord != value) {
      var result = func(value);
      obj[value] = result;
      return func(value);
    } else {
      return obj;
    }
  }
  return returnOutput;
}

console.log('-----------------------------------')

const multiplyBy2 = function (num) {
  return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }

console.log('-----------------------------------')

// CHALLENGE 9

// Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. 
// When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function 
// will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will 
// return the first element of the array again, and continue on with the second after that, and so forth.

function cycleIterator(array) {
  var counter = 0;

  function repeatCycle() {
    if (counter >= array.length) {
      counter = 0;
    }
    counter++;
    return array[counter - 1];
  }
  return repeatCycle;

}

// /*** Uncomment these to check your work! ***/
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'

console.log('-----------------------------------')

// CHALLENGE 10

// Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. 
// defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. 
// Additional arguments needed by the passed-in function will need to be passed into the returned function.

function defineFirstArg(func, arg) {
  function passedFunction(secondArg) {
    return func(arg, secondArg)
  }
  return passedFunction;
}

const subtract = function (big, small) {
  return big - small;
};
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15
console.log(subFrom20(21)); // => should log -1

console.log('-----------------------------------')

// CHALLENGE 11

// Create a function dateStamp that accepts a function and returns a function. The returned function will accept however many arguments 
// the passed-in function accepts, and return an object with a date key that contains a timestamp with the time of invocation, and an 
// output key that contains the result from invoking the passed-in function. HINT: You may need to research how to access information on Date objects.

function dateStamp(func) {
  function returnDateObj(n) {
    var obj = {};
    var date = new Date();
    var result = func(n);
    obj['date'] = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    obj['output'] = result;
    return obj;
  }
  return returnDateObj;
}

/*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

console.log('-----------------------------------')

// CHALLENGE 12

// Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. 
// When two strings are given, the returned function will hold onto the two strings as a pair, for future use. When one string is given, 
// the returned function will return the same string, except all instances of first strings (of saved pairs) will be replaced with their 
// corresponding second strings (of those saved pairs).

function censor() {
  const obj = {};

  function replaceStrings(arg1, arg2) {
    if (arg2) {
      obj[arg1] = arg2;
    } else {
      var newString = arg1;
      console.log('Saved paired object', obj)
      for (var key in obj) {
        if (newString.includes(key)) {
          newString = newString.replaceAll(key, obj[key]);
        }
      }
      return newString;
    }
  }
  return replaceStrings;
}

const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
changeScene('brown', 'yellow');

console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'

console.log('-----------------------------------')

// CHALLENGE 13

// There's no such thing as private properties on a JavaScript object! But, maybe there are? Implement a function createSecretHolder(secret)
// which accepts any value as secret and returns an object with ONLY two methods. getSecret() which returns the secret setSecret() which sets the secret

function createSecretHolder(secret) {
	var privateSecret = secret;
  function getSecret() {
    console.log(privateSecret)
    return privateSecret;
  }
  function setSecret(n) {
    privateSecret = n;
  }
  var returnedObj = {
    getSecret: getSecret,
    setSecret: setSecret
  }
	return returnedObj;
}

var obj = createSecretHolder(5)
obj.getSecret() // => returns 5
obj.setSecret(2)
obj.getSecret() // => returns 2
obj.setSecret(15)
obj.getSecret() // => returns 15

console.log('-----------------------------------')

// CHALLENGE 14

// Write a function, callTimes, that returns a new function. The new function should return the number of times it’s been called.

function callTimes() {
	var counter = 0;
  function returnHowManyTimes() {
    counter++;
    console.log('Counter: ', counter)
    return counter;
  }
  return returnHowManyTimes;
}

let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
myNewFunc1(); // => 1
myNewFunc1(); // => 2
myNewFunc2(); // => 1
myNewFunc2(); // => 2

console.log('-----------------------------------')

// CHALLENGE 15

// Create a function roulette that accepts a number (let us call it n), and returns a function. The returned function will 
// take no arguments, and will return the string 'spin' the first n - 1 number of times it is invoked. On the very next invocation 
// (the nth invocation), the returned function will return the string 'win'. On every invocation after that, the returned function 
// returns the string 'pick a number to play again'.

function roulette(num) {
	var counter = 0;
  function spinAgain() {
    counter++;
    var log = '';
    if(counter < num) {
      log = 'spin'
    } else if(counter == num) {
      log = 'win'
    } else {
			log = 'pick a number to play again'
    }
    return log;
  }
  return spinAgain;
}

const play = roulette(3);
console.log(play()); // => should log 'spin'
console.log(play()); // => should log 'spin'
console.log(play()); // => should log 'win'
console.log(play()); // => should log 'pick a number to play again'
console.log(play()); // => should log 'pick a number to play again'

console.log('-----------------------------------')

// CHALLENGE 16
// Create a function average that accepts no arguments, and returns a function (that will accept either a number as 
// its lone argument, or no arguments at all). When the returned function is invoked with a number, the output 
// should be average of all the numbers have ever been passed into that function (duplicate numbers count just 
// like any other number). When the returned function is invoked with no arguments, the current average is outputted. 
// If the returned function is invoked with no arguments before any numbers are passed in, then it should return 0.

function average() {
  var counter = 0;
  var currValue = 0;
  function avgSoFar(arg) {
    if(arg) {
      counter++;
      currValue += arg;
    } else {
      if (counter == 0) {
        return counter;
      }
    }
    return currValue/counter;
  }
  return avgSoFar;
}

const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8

console.log('-----------------------------------')

// CHALLENGE 17
function makeFuncTester(arrOfTests) {

}

// /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(['hello', 'hellO']);
// capLastTestCases.push(['goodbye', 'goodbyE']);
// capLastTestCases.push(['howdy', 'howdY']);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = str => str.toUpperCase();
// const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true


// CHALLENGE 18
function makeHistory(limit) {

}

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions('jump')); // => should log 'jump done'
// console.log(myActions('undo')); // => should log 'jump undone'
// console.log(myActions('walk')); // => should log 'walk done'
// console.log(myActions('code')); // => should log 'code done'
// console.log(myActions('pose')); // => should log 'pose done'
// console.log(myActions('undo')); // => should log 'pose undone'
// console.log(myActions('undo')); // => should log 'code undone'
// console.log(myActions('undo')); // => should log 'nothing to undo'


// CHALLENGE 19
function blackjack(array) {

}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
// const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // => should log 9
// console.log(i_like_to_live_dangerously()); // => should log 11
// console.log(i_like_to_live_dangerously()); // => should log 17
// console.log(i_like_to_live_dangerously()); // => should log 18
// console.log(i_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!