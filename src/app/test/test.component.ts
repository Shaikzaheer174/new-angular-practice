import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

    <p>
      Interpolation Concept!
    </p>
    <h4> {{textInterpolation}} </h4>
    <h4> {{"My Name is : " + textInterpolation}} </h4>
    <h5>string length is : {{textInterpolation.length}}</h5> <!--we can use string proprties -->
    <h6> {{textInterpolation.toLocaleUpperCase()}}</h6>
    <h3>{{getUserName()}}</h3>
    <!-- binding can not contains assignment {{x = 8}} -->
    <!-- we can also should not use global variables in interpolation  like {{window.location.href}} insteadof follow the below-->
    <marquee> <h6>{{"my site location: " + myUrl}}</h6> </marquee>

  `,
  styles: [`
  p {
      text-align: center;
      font-size: 30px;
    }
  `,
  `
  * {
    color: blue;
  }
  `
  ]
})
export class TestComponent {
  // properties
  public textInterpolation = 'Zaheer';
  myUrl = window.location.href;

  // method:
  public getUserName(): string {
    return "Hello " + this.textInterpolation;
  };



}
