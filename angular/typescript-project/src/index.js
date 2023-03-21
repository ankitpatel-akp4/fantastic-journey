// code 1
// var username:string = "John"
// // document.write("Hello! "+username)
// // variables
// function Demo()
// {
//     var x = 10;
//     if(x==10)
//     {
//         var y = 20;
//     }
//     console.log("x=" + x+"\ny="+y);
// }
// Demo()
// cdoe2
// var username:string|null = prompt("Enter your name: ");
// var role:string|null = prompt("Enter your role: ");
// var productName:any = prompt("Enter product name: ");
// class Product
// {
//     public _productName:any
//     get productName(){
//         return this._productName as string;
//     }
//     set productName(newName:string){
//         if(role == "admin"){
//             this._productName = newName;
//         }else{
//             document.write(`Hello! ${username}. You are not authorize to change the product name.`);
//         }
//     }
// }
// let product = new Product();
// product.productName = productName;
// if(productName){
//     document.write("Product name = "+product.productName);
// }
// //code 3 
//  methods
// anonymous function used in callback and fetch
// (function(){
//     document.write("hello")
// })()
// var hello = function(){
// }
//// constructor
// class Base{
// }
// class Demo extends Base{
//     public Name: string = "";
//     public Price:number = 0;
//     public Qty:number = 0;
//     constructor(Name:string){
//         super()
//         this.Name = Name;
//     }
//// constructor can not me private in TS
// //can not  be overloaded
// //if derived class is having a contructor it must have supper call, It is explicit
// //
//     public Total():number{
//         return  this.Qty * this.Qty;
//     }
//     public Print():void{
//         console.log(`Name ${this.Name}\nPrice=${this.Price}\nQty=${this.Qty}`)
//     }
// }
// //let demo = new Demo();
// // templates
// // Templates provides pre-defined logic and Data Transfer, which we can 
// // Implement and customise according to our need.
/**
 * software project
 *  end to end
 * support
 * rollout (templates are used in rollout)
 * upgrade
 *
 *
 * how to design templets
 * abstracts class
 *
 *
 * interface => contract
 * template => abstract class
 */
// interface ProductContract
// {
//     Name:string,
//     Price:number,
//     Qty:number,
//     Total():number,
//     Print():void
// }
// abstract class ProductTemplate implements ProductContract
// {
//     public Name:string = "";
//     public Price:number = 0;
//     public Qty: number = 0;
//     public abstract Total():number;
//     public abstract Print():void;
// }
// class ProductComponent extends ProductTemplate
// {
//     Name = "Apple";
//     Price = 4500;
//     Qty = 10;
//     Total(){
//         return this.Qty * this.Price;
//     }
//     public Print(): void {
//         console.log(`Name: ${this.Name}\nPrice: ${this.Price}\nQty:${this.Qty}`);
//     }
// }
// let obj = new ProductComponent();
// obj.Print()
/**
 * WHATWG HTML
 * MDN CSS JAVASCRIPT
 * MSDN MICROSOFT
 *
 * What is polymorphism?
 * Answer: The abiliy to beha
 *
 *
 * Pager Digital Orgnizer Camera Phone
 * sms  contacts
 *      Appoinments
 *      call                pic     call
 *
 * ----------mobile---------------------------
 *
 */
// class Employee
// {
//     public FirstName:string = "";
//     public LastName:string = "";
//     public Designation:string = "";
//     public Print(){
//         console.log(`name: ${this.FirstName} ${this.LastName},\nDesignation: ${this.Designation}`)
//     }
// }
// class Developer extends Employee
// {
//     FirstName = "Ankit";
//     LastName = "Patel";
//     Designation = "SDE"
//     Role = "hacker"
//     Print(){
//         super.Print();
//         console.log(`Role: ${this.Role}`)
//     }
// }
/**
 * why multiple inheritence is not supported?
 * ans = constructor deadlock!
 */
/**
 *              Modules
 * Module is a collection of variables, functions, contracts, templates, and components
 *
 * Moduls are used jto build library of application
 *
 * Library allows to reuse the resources
 *
 * Modules requires a module system
 * some Module systems are:
 *  Common JS
 *  Require JS
 *  UMD (Univarsal Module Distribution)
 *  AMD (Asynchronous Module Distribution)
 *
 * TypeScript by default uses Commonjs
 *
 */
/**
 *
 *      Namespace
 *
 * - is a collection of sub-namespace and doulules
 * - we can build and import library using namespace.
 * - it reduces imbiguity isues
 *
 *              Project A
 *  Team A      Team B
 *  class1      class1
 *
 *   module
 *   class
 *   print()
 */
/**
 *      Generic
 * Initially it is open to handle any type, once it knows the data it is fixex;
 */
// class Demo{
//     public Add<T>(a:T,b:T){
//         console.log(typeof(a)+" "+typeof(b))
//     }
// }
// let obj = new Demo();
// obj.Add("ankit","patel");
// // obj.Add("a",3); //not valid
// generic type can not handle oprators directly
// example
// function Sum (a,b){
//     return a+b;
// }
// class Demo{
//     public Add<T>(a:T,b:T){
//         return Sum(a,b);
//     }
// }
/**
 *  Enums - Enumeration
 *
 * it is a collection of constants.
 * it can have expression that returns string or number not bool or other
 *
 *
 */
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["sum"] = 0] = "sum";
    WeekDays[WeekDays["mon"] = 1] = "mon";
    WeekDays[WeekDays["tue"] = 2] = "tue";
    WeekDays[WeekDays["wed"] = 3] = "wed";
    WeekDays[WeekDays["thu"] = 4] = "thu";
    WeekDays[WeekDays["fri"] = 5] = "fri";
    WeekDays[WeekDays["sat"] = 6] = "sat";
})(WeekDays || (WeekDays = {}));
var mfg = new Date("2222-01-23");
console.log(WeekDays[mfg.getDay()]);
