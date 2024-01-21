import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  name = "zaheer";
  message = "Welcome to angular";
  myObject = {
    "one" : "1",
    "two" : "2",
    "three" : "3",
  };

  date = new Date();
}