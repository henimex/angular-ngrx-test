import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  //@ts-ignore
  v13Counter:number

  constructor(private store:Store<{count:number}>) { }

  ngOnInit(): void {
    this.checkCounterStatus()
  }

  checkCounterStatus(){
    this.store.select('count').subscribe( response => {
      this.v13Counter = response
    })
  }

}
