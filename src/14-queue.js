// const ListNode = require('../extensions/list-node');
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
    this.result = [];
  }

  get size() {
    const size = this.result.length;
    return size;
  }

  enqueue(element) {
    this.result.push(element);
  }

  dequeue() {
    const el = this.result.shift();
    return el;
  }
}

module.exports = Queue;
