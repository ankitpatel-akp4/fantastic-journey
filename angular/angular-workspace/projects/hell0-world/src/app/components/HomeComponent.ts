import { Component } from "@angular/core";

@Component({
    selector:'app-home',
    template:`
    <h2>{{title}}</h2>
    <p>Welcome to Online shoping store</p>
    `,
    styles:['h2{color:red;text-align:center}','p{color:blue}']
})
export class HomeComponent
{
    title = " Shoping Home"
}
/**
 * adv = load time is less
 * disadv = tightly coupled
 * 
 * when to use it
 * when we need stable functionality
 */