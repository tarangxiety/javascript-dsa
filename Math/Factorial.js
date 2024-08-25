function factorial(n) {
	let result = 1
	for (let i = 2; i <= n; i++) {
		result = result * i
	}

	return result
}

function factorialRecur(n) {
	if (n === 0) {
		return 1
	}
	return n * factorialRecur(n - 1)
}

console.log(factorial(5))
console.log(factorial(8))
console.log(factorial(4))
console.log()
console.log(factorialRecur(5))
console.log(factorialRecur(8))
console.log(factorialRecur(4))