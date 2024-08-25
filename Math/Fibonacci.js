function fibonacci(n) {
	let fibo = [0, 1]
	for (let i = 2; i < n; i++) {
		fibo[i] = fibo[i - 1] + fibo[i - 2]
	}
	return fibo
}

function fibonacciRecur(n) {
	if (n < 2) {
		return n
	}
	return fibonacciRecur(n - 1) + fibonacciRecur(n - 2)
}

// console.log(fibonacci(5))
// console.log(fibonacci(8))
// console.log(fibonacci(12))
console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(6))
console.log(fibonacci(7))
console.log()
// console.log(fibonacciRecur(5))
// console.log(fibonacciRecur(8))
// console.log(fibonacciRecur(12))
console.log(fibonacciRecur(0))
console.log(fibonacciRecur(1))
console.log(fibonacciRecur(6))
console.log(fibonacciRecur(7))