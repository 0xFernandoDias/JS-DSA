class Node {
	constructor(value) {
		this.value = value
		this.prev = null
		this.next = null
	}
}

class DoublyLinkedList {
	constructor(value) {
		const newNode = new Node(value)
		this.head = newNode
		this.tail = newNode
		this.length = 1
	}

	push(value) {
		const newNode = new Node(value)
		if (!this.head) {
			this.head = newNode
			this.tail = newNode
		} else {
			this.tail.next = newNode
			newNode.prev = this.tail
			this.tail = newNode
		}
		this.length++
		return this
	}

	pop() {
		if (!this.head) return undefined
		const temp = this.tail
		if (this.length === 1) {
			this.head = null
			this.tail = null
		} else {
			this.tail = this.tail.prev
			this.tail.next = null
			temp.prev = null
		}
		this.length--
		return temp
	}

	unshift(value) {
		const newNode = new Node(value)
		if (this.length === 0) {
			this.head = newNode
			this.tail = newNode
		} else {
			newNode.next = this.head
			this.head.prev = newNode
			this.head = newNode
		}
		this.length++
		return this
	}

	shift() {
		if (this.length === 0) return undefined
		let temp = this.head
		if (this.length === 1) {
			this.head = null
			this.tail = null
		} else {
			this.head = this.head.next
			this.head.prev = null
			temp.next = null
		}
		this.length--
		return temp
	}

	get(index) {
		if (index < 0 || index >= this.length) return undefined
		let temp = this.head
		if (index < this.length / 2) {
			for (let i = 0; i < index; i++) {
				temp = temp.next
			}
		} else {
			temp = this.tail
			for (let i = this.length - 1; i > index; i--) {
				temp = temp.prev
			}
		}
		return temp
	}

	set(index, value) {
		let temp = this.get(index)
		if (temp) {
			temp.value = value
			return true
		}
		return false
	}

	insert(index, value) {
		if (index < 0 || index > this.length) return false
		if (index === 0) return this.unshift(value)
		if (index === this.length) return this.push(value)
		const newNode = new Node(value)
		const before = this.get(index - 1)
		const after = before.next
		newNode.prev = before
		newNode.next = after
		before.next = newNode
		after.prev = newNode
		this.length++
		return true
	}

	remove(index) {
		if (index === 0) return this.shift()
		if (index === this.length - 1) return this.pop()
		if (index < 0 || index >= this.length) return undefined
		const temp = this.get(index)
		temp.prev.next = temp.next
		temp.next.prev = temp.prev
		temp.next = null
		temp.prev = null
		this.length--
		return temp
	}
}

function test() {
	let myDoublyLinkedList = new DoublyLinkedList(1)
	myDoublyLinkedList.push(2)
	myDoublyLinkedList.push(3)
	myDoublyLinkedList.push(4)
	myDoublyLinkedList.pop()
	myDoublyLinkedList
	myDoublyLinkedList.unshift(5)
	myDoublyLinkedList.shift()
	console.log(myDoublyLinkedList)
	console.log(myDoublyLinkedList.get(0).value)
	myDoublyLinkedList.set(2, 200)
	myDoublyLinkedList.set(0, 100)
	myDoublyLinkedList.remove(0)
}

test()
