
class Message3 {
    private value : number
    private static nextValue : number = 0

    constructor() {
        this.value = Message3.nextValue;
        Message3.nextValue++;
    }

    getValue() : number {
        return this.value;
    }
}

class Publisher3 {

    public generate() : Message3 {
        var m : Message3 = new Message3();
        console.log("generated message : " + m.getValue())
        return m;
    }
}

interface Observer3 {
    receive(m : Message3) : void
}

class Subscriber3 implements Observer3{
    private received : Message3[]

    constructor() {
        this.received = [];
    }

    public receive(m : Message3){
        this.received.push(m);
        console.log("received message : " + m.getValue())
    }
}

class AsyncQueue3 {
    
    private messageQueue : Message3[]
    private ventilator : Ventilator3;

    constructor() {
        this.messageQueue = [];
        this.ventilator = new Ventilator3()
    }

    public async pull(s : Subscriber3) : Promise<void>{
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

    public async push(p : Publisher3) : Promise<void>{
        console.log("publisher push");

        this.messageQueue.push(p.generate())
    }
}

class Ventilator3 {

    private subscriberList : Subscriber3[]

    constructor() {
        this.subscriberList = []
    }

    public registerSubscriber(s : Subscriber3) {
        this.subscriberList.push(s);
    }

    public unregisterSubscriber(s : Subscriber3) {
        for(var i = 0; i < this.subscriberList.length; i++) {
            if(s === this.subscriberList[i]) {
                this.subscriberList.splice(i, 1);
            }
        }
    }

    public notifySubscriberList() {
        for(var i = 0; i < this.subscriberList.length; i++) {

        }
    }

    public async notifySubscriber(s : Subscriber3) {
        
    }
}

function test3() {
    var s = new Subscriber3();
    var s2 = new Subscriber3();
    var p = new Publisher3();
    var mq = new AsyncQueue3();
}

test2();