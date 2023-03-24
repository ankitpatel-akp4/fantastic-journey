import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  public Name = "samsung TV";
  public Stock = false;
  public username:string = 'John';
  public Product:any = {};
  ngOnInit():void{
    // fetch('http://fakestoreapi.com/products/3')
    // .then(res => res.json())
    // .then(data => {
    //   this.Product = data;
    //   console.log(data)
    // })
    /**
     * site is not working currently!
     */
  }
}
