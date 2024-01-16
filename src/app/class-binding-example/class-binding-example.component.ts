import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding-example',
  templateUrl: './class-binding-example.component.html',
  styleUrls: ['./class-binding-example.component.css']
})
export class ClassBindingExampleComponent {
required = true;
my_Color = "text-color";

group = {
  "text-color": this.required,
  "text-size": this.required,
  "text-style": !this.required
}


}
