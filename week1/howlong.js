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

// recursive
function rFib( n ) {
        if ( n < 2 ) {
            return n;
        }
        return rFib( n-1 ) + rFib( n-2 );
    }
    rFib(20);
    // iterative
    function iFib( n ) {
        const vals = [ 0, 1 ];
        while(vals.length-1 < n) {
            let len = vals.length;
            vals.push( vals[len-1] + vals[len-2] );
        }
        return vals[n];
    }
    iFib(20);
    
// iteration is faster than recursion

const { performance } = require('perf_hooks');
const start = performance.now();

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");

console.log(reversed1);
console.log(`This took ${performance.now() - start} milliseconds to run`);

const start2 = performance.now();
let reversed2 = "";
for (let i = story.length - 1; i>=0; i-- ){
    reversed2 += story[i];
}
console.log(reversed2);

console.log(`This took ${performance.now() - start2} milliseconds to run`);

// result
// !seroirepsa erobal oitpo aitillom otsui tidepmi orev masoirobal ,seroiam saitselom mulli ,imina talleper ,diuqilA !tiguf eauq etatidipuc atulos subirolod atidepxe rutauqesnoc sudnellepeR ?rutanrepsa aropmet muitnadual eropmet tiguf tua adnemussa saitselom sidneicier sutceled tiredneherper maspi mauqila aiuq ,emixam masoirobal allun talleper lihin apluc tnedivorP .tile gnicisipida rutetcesnoc tema tis rolod muspi meroL
// This took 7.206459045410156 milliseconds to run
// !seroirepsa erobal oitpo aitillom otsui tidepmi orev masoirobal ,seroiam saitselom mulli ,imina talleper ,diuqilA !tiguf eauq etatidipuc atulos subirolod atidepxe rutauqesnoc sudnellepeR ?rutanrepsa aropmet muitnadual eropmet tiguf tua adnemussa saitselom sidneicier sutceled tiredneherper maspi mauqila aiuq ,emixam masoirobal allun talleper lihin apluc tnedivorP .tile gnicisipida rutetcesnoc tema tis rolod muspi meroL
// This took 0.563626766204834 milliseconds to run