import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-parent',
  templateUrl: './first-parent.component.html',
  styleUrls: ['./first-parent.component.css']
})
export class FirstParentComponent implements OnInit {

  constructor() { }
  @Output() newProduct = new EventEmitter<any>();
  addProduct(products:any) {
    console.log(products)
    this.newProduct.emit(products);
  }
  ngOnInit(): void {
  }

}
