import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormsEXComponent } from './template-driven-forms-ex.component';

describe('TemplateDrivenFormsEXComponent', () => {
  let component: TemplateDrivenFormsEXComponent;
  let fixture: ComponentFixture<TemplateDrivenFormsEXComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateDrivenFormsEXComponent]
    });
    fixture = TestBed.createComponent(TemplateDrivenFormsEXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
