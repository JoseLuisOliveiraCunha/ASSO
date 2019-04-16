
class Message2 {
    private value : number

    constructor() {
        this.value = Math.floor(Math.random() * 100);
    }

    getValue() : number {
        return this.value;
    }
}

class Publisher2 {

    public generate() : Message2 {
        var m : Message2 = new Message2();
        console.log("generated message : " + m.getValue())
        return m;
    }
}

class Subscriber2 {
    private received : Message2[]

    constructor() {
        this.received = [];
    }

    public receive(m : Message2){
        this.received.push(m);
        console.log("received message : " + m.getValue())
    }
}

class AsyncQueue2 {
    
    private messageQueue : Message2[]

    constructor() {
        this.messageQueue = [];
    }

    public async pull(s : Subscriber2) : Promise<void>{
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

    public async push(p : Publisher2) : Promise<void>{
        console.log("publisher push");

        this.messageQueue.push(p.generate())
    }
}

function test2() {
    var s = new Subscriber2();
    var s2 = new Subscriber2();
    var p = new Publisher2();
    var mq = new AsyncQueue2();

    mq.push(p);
    mq.pull(s);
    mq.pull(s2);
    mq.push(p);
    mq.push(p);
    mq.pull(s);
    mq.pull(s2);
    mq.pull(s);
    mq.pull(s2);
    mq.pull(s);
    mq.push(p);
    mq.push(p);
    mq.push(p);
    mq.push(p);
    mq.pull(s2);
    mq.push(p);
}

test2();