const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor () {
    this.head = null;
    this.tail = null;
  }

  get size() {
    const currentNode = this.head;
    let i = 0;
    while (currentNode.next) {
      i++;
    }
    return i;
  }

  enqueue(element) {
    if (this.head === null) {
      this.head = new ListNode(element);
      this.tail = this.head;
    } else {
      this.tail.next = new ListNode(element);
      this.tail = this.tail.next;
    }
  }

  dequeue() {
    if (this.head === null) {
      return undefined;
    }
    const deleted = this.head;
    this.head = this.head.next;
    return deleted.value;
  }
}

module.exports = Queue;
