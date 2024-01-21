import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello-world';
  receiveddata: string | undefined;
  messageFromParent = 'parent message';

  receivedData(data: string): void {
  this.receiveddata = data;
  }

}
