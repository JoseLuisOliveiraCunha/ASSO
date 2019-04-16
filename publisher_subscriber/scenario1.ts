
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

    constructor() {
        this.messageQueue = [];
    }

    public async pull(s : Subscriber) : Promise<void>{
        console.log("subscriber pull attempt");

        while(this.messageQueue.length == 0) {

            console.log("waiting for message")
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => resolve(), 1000)
              });

            await promise;
        }

        

        s.receive(this.messageQueue[0]);
        this.messageQueue.splice(0, 1);
    }

    public async push(p : Publisher) : Promise<void>{
        console.log("publisher push");

        this.messageQueue.push(p.generate())
    }
}

function test() {
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
}

test();