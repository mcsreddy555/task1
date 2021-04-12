import { Component, OnInit } from '@angular/core';
import { SecondService } from '../second.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private service:SecondService) { }

  public result:any;

  ngOnInit(): void {
    this.service.getData().subscribe((posRes)=>{
      this.result=posRes;
    })
  }

}
