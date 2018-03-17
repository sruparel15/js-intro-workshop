//Alert messages
alert("OMG this is javascript");
var greeting;
greeting = 'Hello People';
var whatTheFoxSays = 'yow-yow';
//alert(greeting);
var mysterySound = whatTheFoxSays;

//Console log 
console.log(mysterySound);
var message = 'Say "Hello" to my little friend.';
var warning = "Don't swim here.  There are sharks!";
console.log(message);
console.log(warning);

//use variables
var ten = 10;
var three = 3;
var multipleOfNumbers = ten * three;
console.log(multipleOfNumbers);

//Functions
function add(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

function sub(num1, num2) {
    var sub = num1 - num2;
    return sub;
}

function mul(num1, num2) {
    var mul = num1 * num2;
    return mul;
}

function div(num1, num2) {
    var div = num1 / num2;
    return div;
}

console.log(add(5,10));
console.log(sub(10,4));

// Loops
function loop(num1,num2,operator) {
    if (operator == "+") {
       return add(num1,num2);
    }       
    else if(operator == "-") {
        return sub(num1,num2);
    }
    else if(operator == "*") {
        return mul(num1,num2);
    }
    else {
        return div(num1,num2);
    }
}

//Use of Array
var favouriteFood = ['apple','grapes','kiwi']
console.log(favouriteFood.length);
console.log(favouriteFood[2]);
favouriteFood[0] = 'mango';
console.log(favouriteFood);
favouriteFood.push('strawberry');
console.log(favouriteFood);