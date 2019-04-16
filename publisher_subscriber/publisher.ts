class Publisher
{
    private data = 0
    private queue : Queue

    constructor(queue : Queue)
    {
        this.queue = queue
    }

    private generator() : number {
        this.data += 1
        this.data %= 10
        return this.data
    }

    public push() : void {
        var value = this.generator()
        this.queue.push(value)
        console.log("push " + value)
    }

}

class Subscriber
{
    private dataArray : Array<number> = Array<number>()
    private queue : Queue

    constructor(queue : Queue)
    {
        this.queue = queue
    }

    public async pull() : Promise<void> {
        
        console.log("pull " + value)
        return new Promise((resolve, reject) => {
            if(!this.queue.isEmpty()) {
                var value = this.queue.pull()
                this.dataArray.push(value)
                resolve()
            }
            else
                setTimeout(function() { this.tip.destroy() }, 1000);
        })
    }

    
}

class Queue {

    private dataArray : Array<number> = Array<number>()

    constructor()
    {

    }

    public isEmpty() : boolean
    {
        return this.dataArray.length == 0
    }

    public pull() : number 
    {   
        return this.dataArray.splice(0, 1)[0]
    }

    public push(value : number) : void
    {
        this.dataArray.push(value)
    }

}

async function main() : Promise<void>{
    var q : Queue = new Queue()
    var p : Publisher = new Publisher(q)
    var s : Subscriber = new Subscriber(q)

    p.push()
    p.push()
    await s.pull()
    p.push()
    await s.pull()
    await s.pull()
    await s.pull()
    p.push()
}

main()
