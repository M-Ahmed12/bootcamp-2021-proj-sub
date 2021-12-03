"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = "hello world";
console.log(message);
const TaskCollection_1 = require("./TaskCollection");
let task01 = new TaskCollection_1.TaskCollection();
task01.addTodo("Aam Le Ao");
task01.addTodo("Bakery");
task01.printAll();
task01.taskdone(2);
task01.printAll();
task01.addTodo("Dahi Le Ao");
task01.addTodo("Tikka Le Ao");
task01.getTodoById(3);
// console.clear();
// var numeric: number = 10;
// var floating_value: number = 10.3;
// var condition:boolean = true;
// var condition01: any = "123";
// console.log(numeric);
// console.log(floating_value);
// console.log(condition);
// console.log(condition01);
// let id: number;
// let student_name: string;
// let email: string;
// function set_student_value(id:number,student_name:string,email:string,) : void{
//     this.id = id;
//     this.student_name = student_name;
//     this.email = email;
// }
// function printStudent(){
//     console.log("The Id of Student is: "  +  this.id  +  "The Student Name Is: " +  this.student_name + "Email Of Student: "  +  this.email)
// }
// set_student_value(1, "Ahmed", "Ahmed_shahid50@yahoo.com");
// printStudent();
// class Student {
//     id: number;
//     student_name: string;
//     email: string;
//     constructor(f_id:number, f_student_name:string, f_email:string) {
//     this.id = f_id;
//     this.student_name = f_student_name;
//     this.email = f_email;
// }
// printStudent(): void{
//     console.log("The Student Id Is: " + this.id);
//     console.log("The Student Name Is: " + this.student_name);
//     console.log("The Student Email Is: " + this.email);
// }
// }
// let Student01 = new Student(1, "Ahmed", "Ahmed_shahid50@yahoo.com");
// console.log(Student01)
// Student01.printStudent();
