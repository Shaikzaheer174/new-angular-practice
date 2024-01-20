import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-directive-example',
  templateUrl: './ng-if-directive-example.component.html',
  styleUrls: ['./ng-if-directive-example.component.css']
})
export class NgIfDirectiveExampleComponent {
  name: string = 'zaheer';
  required: boolean = true;

  status: boolean = false;


}