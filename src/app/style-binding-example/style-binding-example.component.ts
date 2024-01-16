import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding-example',
  templateUrl: './style-binding-example.component.html',
  styleUrls: ['./style-binding-example.component.css']
})
export class StyleBindingExampleComponent {
  public myColor = 'pink';

  required: boolean = true;

  myStyles = {
    color : 'gold',
    fontStyle : 'italic',
    fontSize: '100px'
  }
}
