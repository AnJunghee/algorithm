function solution(balls, share) {
    const factorial = (n) => {
        if(n === 0 || n === 1) return 1;
        return n * factorial(n - 1);
    }
    
    const n = factorial(balls);
    const m = factorial(share);
    const nm = factorial(balls - share);
    
    return Math.round(n / (nm * m));
}