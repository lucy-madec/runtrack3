function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function summPrimeNumber(a, b) {
    if (isPrime(a) && isPrime(b)) {
        return a + b;
    } else {
        return false;
    }
}