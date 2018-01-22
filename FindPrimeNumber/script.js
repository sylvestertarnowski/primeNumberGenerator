
function findPrime(num) {
    for (var n = 2; n < num; n++) {
        if (num % n === 0) {
            return false;
        }
    }
    return num !==1;
}
console.log(findPrime(3));
console.log(findPrime(5));
console.log(findPrime(7));
console.log(findPrime(8));
console.log(findPrime(11));
console.log(findPrime(104729))