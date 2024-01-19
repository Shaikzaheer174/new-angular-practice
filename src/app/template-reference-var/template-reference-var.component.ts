import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference-var',
  templateUrl: './template-reference-var.component.html',
  styleUrls: ['./template-reference-var.component.css']
})
export class TemplateReferenceVarComponent {
  dataFromTemplate: any;
captureData(data:any): void {
  this.dataFromTemplate = data;
}
}
