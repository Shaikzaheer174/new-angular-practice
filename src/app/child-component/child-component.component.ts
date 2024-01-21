import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
@Input() public fromParent: string | undefined;

@Output() toParent: EventEmitter<string> = new EventEmitter<string>();

sendData(): void {
  this.toParent.emit('data sent to parent...');
};

}
