import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-directive-example',
  templateUrl: './ng-for-directive-example.component.html',
  styleUrls: ['./ng-for-directive-example.component.css']
})
export class NgForDirectiveExampleComponent {
  public subjects = ["Html", "Css", "Js", "Angular", "Typescript"];
}
