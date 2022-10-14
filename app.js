//Closures, Scope, and Execution Context

// CHALLENGE 1

// Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello". 
// When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.

console.log('%cYou can find challenges and its solutions in app.js 🤓', 'font-size: 24px; font-weight: 700; color: magenta')

console.log('-----------------------------------')

console.log('%cCHALLENGE 1', "color:green; font-size: 20px");
console.log('%cDescription: should console.log("hello")', "color:yellow; font-size: 16px")

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

console.log('%cCHALLENGE 2', "color:green; font-size: 20px");

function createFunctionPrinter(input) {
  function print() {
    console.log(input);
  }
  return print;
}

console.log('%cDescription: should console.log("sample")', "color:yellow; font-size: 16px")
const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
console.log('%cDescription: should console.log("hello")', "color:yellow; font-size: 16px")
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');


console.log('-----------------------------------')

// CHALLENGE 3

// Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope.
// Uncomment those lines of code. Try to deduce the output before executing. Now we are going to create a function addByX that returns a function that will add an input by x.

console.log('%cCHALLENGE 3', "color:green; font-size: 20px");

function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log(counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

console.log('%cDescription: should console.log("1")', "color:yellow; font-size: 16px")
willCounter(); // 1
console.log('%cDescription: should console.log("2")', "color:yellow; font-size: 16px")
willCounter(); // 2
console.log('%cDescription: should console.log("3")', "color:yellow; font-size: 16px")
willCounter(); // 3

console.log('%cDescription: should console.log("1")', "color:yellow; font-size: 16px")
jasCounter(); // 1
console.log('%cDescription: should console.log("4")', "color:yellow; font-size: 16px")
willCounter(); // 4


function addByX(x) {
  function add(n) {
    return x + n;
  }
  return add;
}

const addByTwo = addByX(2);
console.log('%cDescription: should console.log("3")', "color:yellow; font-size: 16px")
console.log(addByTwo(1)); // => should return 3
console.log('%cDescription: should console.log("4")', "color:yellow; font-size: 16px")
console.log(addByTwo(2)); // => should return 4
console.log('%cDescription: should console.log("5")', "color:yellow; font-size: 16px")
console.log(addByTwo(3)); // => should return 5

const addByThree = addByX(3);
console.log('%cDescription: should console.log("4")', "color:yellow; font-size: 16px")
console.log(addByThree(1)); // => should return 4
console.log('%cDescription: should console.log("5")', "color:yellow; font-size: 16px")
console.log(addByThree(2)); // => should return 5

const addByFour = addByX(4);
console.log('%cDescription: should console.log("8")', "color:yellow; font-size: 16px")
console.log(addByFour(4)); // => should return 8
console.log('%cDescription: should console.log("9")', "color:yellow; font-size: 16px")
console.log(addByFour(5)); // => should return 9


console.log('-----------------------------------')

// CHALLENGE 4

// Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should 
// call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the 
// output value from the first time it was called.

console.log('%cCHALLENGE 4', "color:green; font-size: 20px");

function once(func) {
  var counter = 0;
  var currValue = 0;

  function executeOnce(n) {
    counter++;
    if (counter == 1) {
      currValue = func(n);
    }
    return currValue;
  }
  return executeOnce;
}

const onceFunc = once(addByTwo);
console.log('%cDescription: should console.log("6")', "color:yellow; font-size: 16px")
console.log(onceFunc(4)); // => should log 6
console.log('%cDescription: should console.log("6")', "color:yellow; font-size: 16px")
console.log(onceFunc(10)); // => should log 6
console.log('%cDescription: should console.log("6")', "color:yellow; font-size: 16px")
console.log(onceFunc(9001)); // => should log 6

console.log('-----------------------------------')

// CHALLENGE 5

// Write a function after that takes the number of times the callback needs to be called before being executed as the 
// first parameter and the callback as the second parameter.

console.log('%cCHALLENGE 5', "color:green; font-size: 20px");

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
console.log('%cDescription: nothing is printed', "color:yellow; font-size: 16px")
afterCalled(); // => nothing is printed
console.log('%cDescription: nothing is printed', "color:yellow; font-size: 16px")
afterCalled(); // => nothing is printed
console.log('%cDescription: should console.log("hello")', "color:yellow; font-size: 16px")
afterCalled(); // => 'hello' is printed

console.log('-----------------------------------')

// CHALLENGE 6

// Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be 
// invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();


function delay(func, wait) {
  function timeoutDelay() {
    setTimeout(() => {
      func();
    }, wait)
  }
  return timeoutDelay;
}


const afterDelay = delay(() => {
  console.log('%cCHALLENGE 6', "color:green; font-size: 20px");
  console.log('%cDescription: should console.log("Delayed hello")', "color:yellow; font-size: 16px")
  console.log('Delayed hello')
}, 3000);
afterDelay();

// CHALLENGE 7

// Write a function rollCall that accepts an array of names and returns a function. The first time the returned function is invoked, it should 
// log the first name to the console. The second time it is invoked, it should log the second name to the console, and so on, until all names have 
// been called. Once all names have been called, it should log 'Everyone accounted for'.

console.log('%cCHALLENGE 7', "color:green; font-size: 20px");

function rollCall(names) {
  var counter = 0;

  function callSomeone() {
    counter++;
    if (counter <= names.length) {
      return names[counter - 1];
    } else {
      return 'Everyone accounted for';
    }
  }
  return callSomeone;
}

const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth', 'Proleter'])
console.log('%cDescription: should console.log("Victoria")', "color:yellow; font-size: 16px")
console.log(rollCaller()) // => should log 'Victoria'
console.log('%cDescription: should console.log("Juan")', "color:yellow; font-size: 16px")
console.log(rollCaller()) // => should log 'Juan'
console.log('%cDescription: should console.log("Ruth")', "color:yellow; font-size: 16px")
console.log(rollCaller()) // => should log 'Ruth'
console.log('%cDescription: should console.log("Everyone accounted for")', "color:yellow; font-size: 16px")
console.log(rollCaller()) // => should log 'Everyone accounted for'


// CHALLENGE 8

// Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). saveOutput 
// will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. 
// When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values.

console.log('%cCHALLENGE 8', "color:green; font-size: 20px");

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
console.log('%cDescription: should console.log(4)', "color:yellow; font-size: 16px")
console.log(multBy2AndLog(2)); // => should log 4
console.log('%cDescription: should console.log(18)', "color:yellow; font-size: 16px")
console.log(multBy2AndLog(9)); // => should log 18
console.log('%cDescription: should console.log({ 2: 4, 9: 18 })', "color:yellow; font-size: 16px")
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }

console.log('-----------------------------------')

// CHALLENGE 9

// Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. 
// When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function 
// will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will 
// return the first element of the array again, and continue on with the second after that, and so forth.

console.log('%cCHALLENGE 9', "color:green; font-size: 20px");

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
console.log('%cDescription: should console.log("Fri")', "color:yellow; font-size: 16px")
console.log(getDay()); // => should log 'Fri'
console.log('%cDescription: should console.log("Sat")', "color:yellow; font-size: 16px")
console.log(getDay()); // => should log 'Sat'
console.log('%cDescription: should console.log("Sun")', "color:yellow; font-size: 16px")
console.log(getDay()); // => should log 'Sun'
console.log('%cDescription: should console.log("Fri")', "color:yellow; font-size: 16px")
console.log(getDay()); // => should log 'Fri'
console.log('%cDescription: should console.log("Sun")', "color:yellow; font-size: 16px")
console.log(getDay()); // => should log 'Sat'

console.log('-----------------------------------')

// CHALLENGE 10

// Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. 
// defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. 
// Additional arguments needed by the passed-in function will need to be passed into the returned function.

console.log('%cCHALLENGE 10', "color:green; font-size: 20px");

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
console.log('%cDescription: should console.log("15")', "color:yellow; font-size: 16px")
console.log(subFrom20(5)); // => should log 15
console.log('%cDescription: should console.log("-1")', "color:yellow; font-size: 16px")
console.log(subFrom20(21)); // => should log -1

console.log('-----------------------------------')

// CHALLENGE 11

// Create a function dateStamp that accepts a function and returns a function. The returned function will accept however many arguments 
// the passed-in function accepts, and return an object with a date key that contains a timestamp with the time of invocation, and an 
// output key that contains the result from invoking the passed-in function. HINT: You may need to research how to access information on Date objects.

console.log('%cCHALLENGE 11', "color:green; font-size: 20px");

function dateStamp(func) {
  function returnDateObj(n) {
    var obj = {};
    var date = new Date();
    obj['date'] = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    obj['output'] = func(n);
    return obj;
  }
  return returnDateObj;
}

/*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp(n => n * 2);
var date = new Date();
console.log("%cDescription: should console.log({ date: " + date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + ", output: 8 })", "color:yellow; font-size: 16px")
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log("%cDescription: should console.log({ date: " + date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + ", output: 12 })", "color:yellow; font-size: 16px")
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

console.log('-----------------------------------')

// CHALLENGE 12

// Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. 
// When two strings are given, the returned function will hold onto the two strings as a pair, for future use. When one string is given, 
// the returned function will return the same string, except all instances of first strings (of saved pairs) will be replaced with their 
// corresponding second strings (of those saved pairs).

console.log('%cCHALLENGE 12', "color:green; font-size: 20px");

function censor() {
  const obj = {};

  function replaceStrings(arg1, arg2) {
    if (arg2) {
      obj[arg1] = arg2;
    } else {
      var newString = arg1;
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

console.log('%cDescription: should console.log("The quick, brown fox jumps over the lazy dogs.")', "color:yellow; font-size: 16px")
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


// CHALLENGE 13

// There's no such thing as private properties on a JavaScript object! But, maybe there are? Implement a function createSecretHolder(secret)
// which accepts any value as secret and returns an object with ONLY two methods. getSecret() which returns the secret setSecret() which sets the secret

console.log('%cCHALLENGE 13', "color:green; font-size: 20px");

function createSecretHolder(secret) {
  var privateSecret = secret;
  var returnedObj = {
    getSecret() {
      return privateSecret;
    },
    setSecret(n) {
      privateSecret = n;
    }
  }
  return returnedObj;
}

var obj = createSecretHolder(5)
console.log('%cDescription: should console.log("5")', "color:yellow; font-size: 16px")
console.log(obj.getSecret()) // => returns 5
obj.setSecret(2)
console.log('%cDescription: should console.log("2")', "color:yellow; font-size: 16px")
console.log(obj.getSecret()) // => returns 2
obj.setSecret(15)
console.log('%cDescription: should console.log("15")', "color:yellow; font-size: 16px")
console.log(obj.getSecret()) // => returns 15

console.log('-----------------------------------')

// CHALLENGE 14

// Write a function, callTimes, that returns a new function. The new function should return the number of times it’s been called.

console.log('%cCHALLENGE 14', "color:green; font-size: 20px");

function callTimes() {
  var counter = 0;

  function returnHowManyTimes() {
    counter++;
    return counter;
  }
  return returnHowManyTimes;
}

let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
console.log('%cDescription: should console.log("1")', "color:yellow; font-size: 16px")
console.log(myNewFunc1()); // => 1
console.log('%cDescription: should console.log("2")', "color:yellow; font-size: 16px")
console.log(myNewFunc1()); // => 2
console.log('%cDescription: should console.log("1")', "color:yellow; font-size: 16px")
console.log(myNewFunc2()); // => 1
console.log('%cDescription: should console.log("2")', "color:yellow; font-size: 16px")
console.log(myNewFunc2()); // => 2

console.log('-----------------------------------')

// CHALLENGE 15

// Create a function roulette that accepts a number (let us call it n), and returns a function. The returned function will 
// take no arguments, and will return the string 'spin' the first n - 1 number of times it is invoked. On the very next invocation 
// (the nth invocation), the returned function will return the string 'win'. On every invocation after that, the returned function 
// returns the string 'pick a number to play again'.

console.log('%cCHALLENGE 15', "color:green; font-size: 20px");

function roulette(num) {
  var counter = 0;

  function spinAgain() {
    counter++;
    var log = '';
    if (counter < num) {
      log = 'spin'
    } else if (counter == num) {
      log = 'win'
    } else {
      log = 'pick a number to play again'
    }
    return log;
  }
  return spinAgain;
}

const play = roulette(3);
console.log('%cDescription: should console.log("spin")', "color:yellow; font-size: 16px")
console.log(play()); // => should log 'spin'
console.log('%cDescription: should console.log("spin")', "color:yellow; font-size: 16px")
console.log(play()); // => should log 'spin'
console.log('%cDescription: should console.log("win")', "color:yellow; font-size: 16px")
console.log(play()); // => should log 'win'
console.log('%cDescription: should console.log("pick a number to play again")', "color:yellow; font-size: 16px")
console.log(play()); // => should log 'pick a number to play again'
console.log('%cDescription: should console.log("pick a number to play again")', "color:yellow; font-size: 16px")
console.log(play()); // => should log 'pick a number to play again'

console.log('-----------------------------------')

// CHALLENGE 16
// Create a function average that accepts no arguments, and returns a function (that will accept either a number as 
// its lone argument, or no arguments at all). When the returned function is invoked with a number, the output 
// should be average of all the numbers have ever been passed into that function (duplicate numbers count just 
// like any other number). When the returned function is invoked with no arguments, the current average is outputted. 
// If the returned function is invoked with no arguments before any numbers are passed in, then it should return 0.

console.log('%cCHALLENGE 16', "color:green; font-size: 20px");

function average() {
  var counter = 0;
  var currValue = 0;

  function avgSoFar(arg) {
    if (arg) {
      counter++;
      currValue += arg;
    } else {
      if (counter == 0) {
        return counter;
      }
    }
    return currValue / counter;
  }
  return avgSoFar;
}

const avgSoFar = average();
console.log('%cDescription: should console.log("0")', "color:yellow; font-size: 16px")
console.log(avgSoFar()); // => should log 0
console.log('%cDescription: should console.log("4")', "color:yellow; font-size: 16px")
console.log(avgSoFar(4)); // => should log 4
console.log('%cDescription: should console.log("6")', "color:yellow; font-size: 16px")
console.log(avgSoFar(8)); // => should log 6
console.log('%cDescription: should console.log("6")', "color:yellow; font-size: 16px")
console.log(avgSoFar()); // => should log 6
console.log('%cDescription: should console.log("8")', "color:yellow; font-size: 16px")
console.log(avgSoFar(12)); // => should log 8
console.log('%cDescription: should console.log("8")', "color:yellow; font-size: 16px")
console.log(avgSoFar()); // => should log 8

console.log('-----------------------------------')

// CHALLENGE 17

// Create a function makeFuncTester that accepts an array (of two-element sub-arrays), and returns a function (that will accept a callback). 
// The returned function should return true if the first elements (of each sub-array) being passed into the callback all yield the corresponding 
// second elements (of the same sub-array). Otherwise, the returned function should return false.

console.log('%cCHALLENGE 17', "color:green; font-size: 20px");

function makeFuncTester(arrOfTests) {
  function isSame(func) {
    var counter = 0;
    for (let i = 0; i < arrOfTests.length; i++) {
      if (func(arrOfTests[i][0]) === arrOfTests[i][1]) {
        counter++;
      }
    }
    if (counter == arrOfTests.length) {
      return true;
    } else {
      return false;
    }
  }
  return isSame;
}

const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = str => str.toUpperCase();
const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log('%cDescription: should console.log(false)', "color:yellow; font-size: 16px")
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log('%cDescription: should console.log(true)', "color:yellow; font-size: 16px")
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true

console.log('-----------------------------------')

// CHALLENGE 18

// Create a function makeHistory that accepts a number (which will serve as a limit), and returns a function (that will accept a string). 
// The returned function will save a history of the most recent "limit" number of strings passed into the returned function (one per invocation only). 
// Every time a string is passed into the function, the function should return that same string with the word 'done' after it (separated by a space). 
// However, if the string 'undo' is passed into the function, then the function should delete the last action saved in the history, and return that 
// deleted string with the word 'undone' after (separated by a space). If 'undo' is passed into the function and the function's history is empty, 
// then the function should return the string 'nothing to undo'.

console.log('%cCHALLENGE 18', "color:green; font-size: 20px");

function makeHistory(limit) {
  var memory = [];

  function myActions(input) {
    if (input !== 'undo') {
      if (memory.length >= limit) memory.shift();
      memory.push(input);
      return input + ' done';
    } else {
      if (memory.length == 0) return 'nothing to undo';
      let remove = memory.pop();
      return remove + ' undone'
    }
  }
  return myActions;
}

const myActions = makeHistory(2);
console.log('%cDescription: should console.log("jump done")', "color:yellow; font-size: 16px")
console.log(myActions('jump')); // => should log 'jump done'
console.log('%cDescription: should console.log("jump undone")', "color:yellow; font-size: 16px")
console.log(myActions('undo')); // => should log 'jump undone'
console.log('%cDescription: should console.log("walk done")', "color:yellow; font-size: 16px")
console.log(myActions('walk')); // => should log 'walk done'
console.log('%cDescription: should console.log("code done")', "color:yellow; font-size: 16px")
console.log(myActions('code')); // => should log 'code done'
console.log('%cDescription: should console.log("pose done")', "color:yellow; font-size: 16px")
console.log(myActions('pose')); // => should log 'pose done'
console.log('%cDescription: should console.log("pose undone")', "color:yellow; font-size: 16px")
console.log(myActions('undo')); // => should log 'pose undone'
console.log('%cDescription: should console.log("code undone")', "color:yellow; font-size: 16px")
console.log(myActions('undo')); // => should log 'code undone'
console.log('%cDescription: should console.log("nothing to undo")', "color:yellow; font-size: 16px")
console.log(myActions('undo')); // => should log 'nothing to undo'

console.log('-----------------------------------')

// CHALLENGE 19

// Create a function blackjack that accepts an array (which will contain numbers ranging from 1 through 11), and returns a DEALER function. 
// The DEALER function will take two arguments (both numbers), and then return yet ANOTHER function, which we will call the PLAYER function.
// On the FIRST invocation of the PLAYER function, it will return the sum of the two numbers passed into the DEALER function.

// On the SECOND invocation of the PLAYER function, it will return either:

// the first number in the array that was passed into blackjack PLUS the sum of the two numbers passed in as arguments into the DEALER function, 
// IF that sum is 21 or below, OR the string 'bust' if that sum is over 21.

// If it is 'bust', then every invocation of the PLAYER function AFTER THAT will return the string 'you are done!' 
// (but unlike 'bust', the 'you are done!' output will NOT use a number in the array). 
// If it is NOT 'bust', then the next invocation of the PLAYER function will return either:

// the most recent sum plus the next number in the array (a new sum) if that new sum is 21 or less, OR
// the string 'bust' if the new sum is over 21.

// And again, if it is 'bust', then every subsequent invocation of the PLAYER function will return the string 'you are done!'. 
// Otherwise, it can continue on to give the next sum with the next number in the array, and so forth.
// You may assume that the given array is long enough to give a 'bust' before running out of numbers.

// BONUS: Implement blackjack so the DEALER function can return more PLAYER functions that will each continue to take the next number
//  in the array after the previous PLAYER function left off. You will just need to make sure the array has enough numbers for all the PLAYER functions.

console.log('%cCHALLENGE 19', "color:green; font-size: 20px");

function blackjack(array) {
  var dealerCount = 0;

  function deal(n, m) {
    var playerCount = 0;
    var sum = n + m;

    function player() {
      if (sum === 'bust') return 'you are done!'
      playerCount++;
      if (playerCount == 1) return sum;
      sum += array[dealerCount];
      dealerCount++;
      if (sum > 21) {
        sum = 'bust';
        return 'bust'
      }
      return sum;
    }
    return player
  }
  return deal;
}

/*** DEALER ***/
const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

/*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log('%cPLAYER 1', "color:orange; font-size: 18px")
console.log('%cDescription: should console.log(9)', "color:yellow; font-size: 16px")
console.log(i_like_to_live_dangerously()); // => should log 9
console.log('%cDescription: should console.log(11)', "color:yellow; font-size: 16px")
console.log(i_like_to_live_dangerously()); // => should log 11
console.log('%cDescription: should console.log(17)', "color:yellow; font-size: 16px")
console.log(i_like_to_live_dangerously()); // => should log 17
console.log('%cDescription: should console.log(18)', "color:yellow; font-size: 16px")
console.log(i_like_to_live_dangerously()); // => should log 18
console.log('%cDescription: should console.log("bust")', "color:yellow; font-size: 16px")
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log('%cDescription: should console.log("you are done!")', "color:yellow; font-size: 16px")
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log('%cDescription: should console.log("you are done!")', "color:yellow; font-size: 16px")
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

/*** PLAYER 2 ***/
console.log('%cPLAYER 2', "color:orange; font-size: 18px")

const i_TOO_like_to_live_dangerously = deal(2, 2);
console.log('%cDescription: should console.log(4)', "color:yellow; font-size: 16px")
console.log(i_TOO_like_to_live_dangerously()); // => should log 4
console.log('%cDescription: should console.log(15)', "color:yellow; font-size: 16px")
console.log(i_TOO_like_to_live_dangerously()); // => should log 15
console.log('%cDescription: should console.log(19)', "color:yellow; font-size: 16px")
console.log(i_TOO_like_to_live_dangerously()); // => should log 19
console.log('%cDescription: should console.log("bust")', "color:yellow; font-size: 16px")
console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
console.log('%cDescription: should console.log("you are done!")', "color:yellow; font-size: 16px")
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
console.log('%cDescription: should console.log("you are done!")', "color:yellow; font-size: 16px")
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

/*** PLAYER 3 ***/
console.log('%cPLAYER 3', "color:orange; font-size: 18px")

const i_ALSO_like_to_live_dangerously = deal(3, 7);
console.log('%cDescription: should console.log(10)', "color:yellow; font-size: 16px")
console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
console.log('%cDescription: should console.log(13)', "color:yellow; font-size: 16px")
console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
console.log('%cDescription: should console.log("bust")', "color:yellow; font-size: 16px")
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
console.log('%cDescription: should console.log("you are done!")', "color:yellow; font-size: 16px")
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
console.log('%cDescription: should console.log("you are done!")', "color:yellow; font-size: 16px")
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!

console.log('-----------------------------------')