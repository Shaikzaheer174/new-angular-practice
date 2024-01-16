import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleBindingExampleComponent } from './style-binding-example.component';

describe('StyleBindingExampleComponent', () => {
  let component: StyleBindingExampleComponent;
  let fixture: ComponentFixture<StyleBindingExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StyleBindingExampleComponent]
    });
    fixture = TestBed.createComponent(StyleBindingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
