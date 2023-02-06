import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input() parentData :any;
  @Output() childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  passVal(target:any){
    this.childEvent.emit(target.value);
  }

}
