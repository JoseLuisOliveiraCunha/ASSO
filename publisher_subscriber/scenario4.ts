class Publisher4 {

    public queue : BoundedAsyncQueue;

    constructor(queue : BoundedAsyncQueue){
        this.queue = queue;
    }

    async write(message : Message4){
        await this.queue.enqueue(message);
        console.log(message.content + " - written to queue");
    }

}

class Subscriber4 {

    public tags : Array<number>;

    constructor(tags : Array<number>){
        this.tags = tags;
    }

}

class Broker {

}

class Message4 {
    public tag : number;
    public content : string;

    constructor(tag : number, content : string){
        this.tag = tag;
        this.content = content;
    }
}

class BoundedAsyncQueue {
    
    public queue : Array<Message4>;
    public semaphore : AsyncSemaphore ;

    constructor(size : number){
        this.queue = new Array<Message4>();
        this.semaphore = new AsyncSemaphore (size);
    }
    
    // private unresolvedPromisses : Array();

    async enqueue(message: Message4) {
        console.log("checking if enqueue is possible");
        await this.semaphore.waitPush();
        console.log("enqueue will proceed");
        this.queue.push(message);
        this.semaphore.signalPush();
        console.log(this.queue);
    }

    dequeue(): Message4 {
        this.semaphore.waitPull();
        let message = this.queue.shift() || new Message4(1, "");
        this.semaphore.signalPull();
        return message;
    }
}

class AsyncSemaphore  {
    
    public currentSize : number;
    public freeSpace : number;

    constructor(size : number){
        this.currentSize = 0;
        this.freeSpace = size;
    }

    signalPush(): void {
        this.currentSize++;
        console.log("Push has been made - queue size has been incremented");
    }

    signalPull(): void {
        this.currentSize--;
    } 

    async waitPush(): Promise<void> {
        // Sinalize that we want to push by reserving a free space
        this.freeSpace--;
        console.log("Push intention has been made");
        console.log("current free space (includes intentions) " + this.freeSpace);

        while(this.freeSpace < 0) { 
        // Menor do que zero porque o freeSpace já tem em conta a nossa intenção de push
            console.log("waiting for free space to push message")
            var promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("done waiting for one second"); 
                    resolve();
                }, 1000);
            });
            await promise;
        }
    }

    async waitPull(): Promise<void> {
        //TODO: reproduce the behaviour from waitPush (ver o exemplo da wikipedia - é importante garantir que o primeiro a ser atualizado é currentSize, e não o freeSpace)
        while(this.currentSize == 0) {

            console.log("waiting for message to pull")
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => resolve(), 1000)
            });

            await promise;
        }
    }
}

setInterval(() => { }, 1000); // run program until explicit exit

(async () => {
    
    var q : BoundedAsyncQueue = new BoundedAsyncQueue(3);
    var p : Publisher4 = new Publisher4(q);

    var message1 : Message4 = new Message4(1, "message1");
    var message2 : Message4 = new Message4(1, "message2");
    var message3 : Message4 = new Message4(1, "message3");
    var message4 : Message4 = new Message4(1, "message4");

    p.write(message1);
    p.write(message2);
    p.write(message3);
    await p.write(message4);
    console.log("se isto não aparecer, é porque ainda esta à espera");
    /*p.write(message2);
    p.write(message3);
    p.write(message4);*/

    /*var message = await p.queue.dequeue()
    console.log(message.content);*/

    //setTimeout({}, 5000);
    

    process.exit()
})()