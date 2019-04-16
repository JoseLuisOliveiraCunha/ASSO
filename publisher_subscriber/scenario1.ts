
class Message {
    private value : number

    constructor() {
        this.value = Math.floor(Math.random() * 100);
    }

    getValue() : number {
        return this.value;
    }
}

class Publisher {

    public generate() : Message {
        var m : Message = new Message();
        console.log("generated message : " + m.getValue())
        return m;
    }
}

class Subscriber {
    private received : Message[]

    constructor() {
        this.received = [];
    }

    public receive(m : Message){
        this.received.push(m);
        console.log("received message : " + m.getValue())
    }
}

class AsyncQueue {
    
    private messageQueue : Message[]
    private subscriberWaiting : boolean

    constructor() {
        this.messageQueue = [];
        this.subscriberWaiting = false;
    }

    public async pull(s : Subscriber) {
        console.log("pull attempt");

        if(this.subscriberWaiting)
            return

        
        while(this.messageQueue.length == 0) {
            this.subscriberWaiting = true;
            //return;

            let promise = new Promise((resolve, reject) => {
                setTimeout(() => resolve(), 1000)
              });

            await promise;
        }

        

        s.receive(this.messageQueue[0]);
        this.messageQueue.splice(0, 1);
    }

    public async push(p : Publisher) {
        console.log("push attempt");

        this.messageQueue.push(p.generate())
    }
}

var s = new Subscriber();
var p = new Publisher();
var mq = new AsyncQueue();

mq.push(p);
mq.pull(s);
mq.push(p);
mq.push(p);
mq.pull(s);
mq.pull(s);
mq.pull(s);
mq.push(p);

