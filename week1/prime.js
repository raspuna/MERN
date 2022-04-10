let primes = [];

Number.prototype.isPrime = function() {
    for( let p of primes ) {
        if (p*p > this) {
            break;
        }
        if (this % p === 0) {
            return false;
        }
    }
    return true;
}
function getPrime(nthPrime) {
    const { performance } = require('perf_hooks');
    const start = performance.now();
    let num = 2;
    primes = [];
    while( primes.length < nthPrime ) {
        if( num.isPrime() ) {
            primes.push(num);
        }
        num++;
    }
    console.log(`The ${nthPrime}th prime number is ${num-1}`);
    console.log(`This took ${performance.now() - start} milliseconds to run`);
}

getPrime(1e4);
getPrime(1e5);
getPrime(1e6);

// result
// The 10000th prime number is 104729
// This took 105.22557926177979 milliseconds to run
// The 100000th prime number is 1299709
// This took 1718.3115272521973 milliseconds to run
// The 1000000th prime number is 15485863
// This took 43699.60070991516 milliseconds to run