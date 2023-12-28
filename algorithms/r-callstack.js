// R - means Recursion

function funcThree() {
	console.log("3")
}

function funcTwo() {
	funcThree()
	console.log("2")
}

function funcOne() {
	funcTwo()
	console.log("1")
}

funcOne()
