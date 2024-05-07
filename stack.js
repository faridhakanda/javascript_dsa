// Stack implementation using Javascipt

class Stack {
    constructor()  {
        this.data = [];
        this.top = 0;
    }

    push_stack(element) {
        if (this.top < 5)  {
            this.data[this.top] = element;
            this.top += 1;
        } else {
            console.log("Stack is full!");
            return;
        }
    }
    pop_stack() {
        if (this.top === 0) {
            console.log("Stack is empty!");
            return;
        } else {
            this.top -= 1;
            console.log("Stack value is: "+this.data[this.top]);
        }
    }
}


let stack = new Stack();

stack.push_stack(1);
stack.push_stack(2);
stack.push_stack(3);
stack.push_stack(4);
stack.push_stack(5);
stack.push_stack(6);

stack.pop_stack();
stack.pop_stack();
stack.pop_stack();
stack.pop_stack();
stack.pop_stack();
stack.pop_stack();