import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task1';

  productList = [
    {name: 'product1'},
    {name: 'product2'},
    {name: 'product3'}
   ];

   addItem(name: any) {
    this.productList.push({name: name});
  }
}
