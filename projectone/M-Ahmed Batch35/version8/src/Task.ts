export class Task{
    public constructor(public taskId: number, public task:string, public done: boolean = true){
    }
    printTask():void{
        console.log(`the Id is ${this.taskId} \n ${this.task} \n Completed: ${this.done}`)
    }
}