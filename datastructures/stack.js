class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class Stack {
	constructor(value) {
		this.top = new Node(value)
		this.length = 1
	}

	push(value) {
		const newNode = new Node(value)
		if (this.length === 0) {
			this.top = newNode
		} else {
			newNode.next = this.top
			this.top = newNode
		}
		this.length++
		return this
	}

	pop() {
		if (this.length === 0) return undefined
		let temp = this.top
		this.top = temp.next
		temp.next = null
		this.length--
		if (this.length === 0) {
			this.top = null
		}
		return temp
	}
}

function test() {
	let myStack = new Stack(1)
	myStack.push(2)
	myStack.push(3)
	console.log(myStack.pop().value)
	console.log(myStack)
}

test()
