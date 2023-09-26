import Node from "./node.js";

export default class LinkedList {
  construstor() {
    this.listHead = null;
  }

  prepend(value) {
    let p = null;
    if (this.listHead != null) p = this.listHead;
    this.listHead = new Node(value);
    this.listHead.nextNode = p;
  }

  append(value) {
    if (this.listHead === null) this.prepend(value);
    else {
      let p = this.listHead;
      while (p.nextNode != null) p = p.nextNode;
      p.nextNode = new Node(value);
    }
  }

  size() {
    let p = this.listHead;
    let count = 0;
    while (p != null) {
      count++;
      p = p.nextNode;
    }
    return count;
  }

  head() {
    return this.listHead;
  }

  tail() {
    let p = this.listHead;
    while (p.nextNode != null) p = p.nextNode;
    return p;
  }

  at(index) {
    let p = this.listHead;
    for (let i = 0; i < index; i++) {
      p = p.nextNode;
      if (p == null) return "There is no element at this index";
    }
    return p;
  }

  pop() {
    let current = this.listHead;
    let prev = null;
    while (current.nextNode != null) {
      prev = current;
      current = current.nextNode;
    }
    prev.nextNode = null;
  }

  contains(value) {
    let p = this.listHead;
    while (p != null) {
      if (p.value === value) return true;
      p = p.nextNode;
    }
    return false;
  }

  find(value) {
    let p = this.listHead;
    let index = 0;
    while (p != null) {
      if (p.value === value) return index;
      p = p.nextNode;
      index++;
    }
  }

  toString() {
    let p = this.listHead;
    let stringList = "";
    while (p != null) {
      stringList += `(${p.value}) -> `;
      p = p.nextNode;
    }
    return (stringList += "null");
  }

  insertAt(value, index) {
    if (this.listHead == null) this.prepend(value);
    else {
      let current = this.listHead;
      let prev = null;
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current.nextNode;
        if (current == null) break;
      }
      const p = new Node(value);
      prev.nextNode = p;
      p.nextNode = current;
    }
  }

  removeAt(index) {
    if (this.listHead == null) return "List is already empty";

    let current = this.listHead;
    let prev = null;
    for (let i = 0; i < index; i++) {
      prev = current;
      current = current.nextNode;
      if (current == null) return "There is no item for this index";
    }
    prev.nextNode = current.nextNode;
  }
}
