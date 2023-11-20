class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = this.tail = null;
    }
    let temp = this.head;
    this.head = temp.next;
    this.head.prev = null;
    temp.next = null;
    this.length--;
    return temp;
  }

  unshift(val) {
    if (!this.head) {
      return this.push(val);
    } else {
      let newNode = new Node(val);
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
      return this;
    }
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= Math.floor(this.length / 2)) {
      let count = 0;
      let current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }

      return current;
    } else if (index > Math.floor(this.length / 2)) {
      let count = this.length - 1;
      let current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }

      return current;
    }
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    else if (index === 0) {
      this.unshift(val);
    } else if (index === this.length) {
      this.push(val);
    } else {
      let newNode = new Node(val);
      let prevFoundNode = this.get(index - 1);
      newNode.next = prevFoundNode.next;
      newNode.prev = prevFoundNode;
      prevFoundNode.next.prev = newNode;
      prevFoundNode.next = newNode;
    }
    this.length++;
    return true;
  }

  remove(index) {
    let foundNode;
    if (index < 0 || index >= this.length) return false;
    else if (index === 0) {
      this.shift();
    } else if (index === this.length) {
      this.pop();
    } else {
      foundNode = this.get(index);
      foundNode.prev.next = foundNode.next;
      foundNode.next.prev = foundNode.prev;
      foundNode.prev = null;
      foundNode.next = null;
    }
    this.length--;
    return foundNode;
  }
}

const dll = new DoublyLinkedList();
dll.push(88);
dll.push(34);
dll.push(23);
dll.push(100);
dll.push(40);
dll.set(1, 52);
dll.insert(1, 53);
dll.remove(0);
console.log(dll);
