import { Component, Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  list: Array<string> = ['asd'];
  items:number = this.list.length;

  addToList($event:any):void{

    if($event.key == "Enter"){
      this.list.unshift($event.target.value);
      this.items++;
      $event.target.value = '';
    }
    
  }

  markAsCompleted($event:any):void{
    
    if($event.target.style.textDecoration != 'line-through'){
      $event.target.style.textDecoration = 'line-through';
      this.items--;    
    }
  }
 
}
