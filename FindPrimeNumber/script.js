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
        console.log(n);
        break; //break on the first possible find
       }
    }
}
// This function informs whether the number is prime or not.
function tellMeIfPrime() {
    while (num = document.getElementById("checkifprime").value) {
        if (checkIfPrime(num)) {
            console.log(num + " is a prime number!");
        } else {
            console.log("This is not a prime number!");
        }
        break;
    }
}