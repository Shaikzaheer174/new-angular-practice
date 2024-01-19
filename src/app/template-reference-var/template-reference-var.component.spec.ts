import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferenceVarComponent } from './template-reference-var.component';

describe('TemplateReferenceVarComponent', () => {
  let component: TemplateReferenceVarComponent;
  let fixture: ComponentFixture<TemplateReferenceVarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateReferenceVarComponent]
    });
    fixture = TestBed.createComponent(TemplateReferenceVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
