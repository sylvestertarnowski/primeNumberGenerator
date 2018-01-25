// this function checks if the input number is prime
function checkIfPrime(num) {
    for (var n = 2; n < num; n++) {
        if (num % n === 0) {
            return false;
        }
    }
    return num !==1;
}

/* This function finds the next prime number;
the for loop sarts from the val + 1 to prevent the 
checkIfPrime() function from returning the starting
value. */
function findNextPrime(val) {
    for (var n = val + 1; n < (Math.pow(n, 2) + 2); n++) {
       if (checkIfPrime(n)) {
        return n;
        break; //break on the first possible find
       }
    }
}
// This function informs whether the number is prime or not.
function tellMeIfPrime() {
    while (num = document.getElementById("checkifprime").value) {
        if (checkIfPrime(num)) {
            document.getElementById("textinfo").innerHTML = num + " is a prime number!";
            document.getElementById("numberinfo").innerHTML = num;
        } else {
            document.getElementById("textinfo").innerHTML = num + " is not a prime number! Below is the next possible prime number:";
            var result = findNextPrime(num);
            document.getElementById("numberinfo").innerHTML = result;
        }
        break;
    }
}

function printNextPrime() {
    var num = document.getElementById("numberinfo").innerHTML.value;
    var result = findNextPrime(num);
    document.getElementById("numberinfo").innerHTML = result;
}