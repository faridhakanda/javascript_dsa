// Queue implementation using javascript
// class method 
// manually
const MAX = 6;
class Queue {
    constructor() {
        this.data = [];
        this.head = 0;
        this.tail = 0;
    }

    enqueue(element) {
        if ((this.tail+1)%MAX === this.head) {
            console.log("Queue is full!");
            return;
        } else {
            this.data[this.tail] = element;
            this.tail = (this.tail+1)%MAX;
        }
    }
    dequeue() {
        if (this.tail === this.head) {
            console.log("Queue is empty!");
            return;
        } else {
            console.log("Queue value is: "+this.data[this.head]);
            this.head = (this.head+1)%MAX;
        }
    }
}

let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

