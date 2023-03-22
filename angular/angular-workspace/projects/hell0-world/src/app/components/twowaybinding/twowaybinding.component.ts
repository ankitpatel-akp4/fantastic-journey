import { Component } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent {
  public Product:any = {
    Name:'',
    Price: 0,
    Stock:false,
    City:''
  }
}
