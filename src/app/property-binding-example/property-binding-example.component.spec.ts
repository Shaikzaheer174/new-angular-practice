import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBindingExampleComponent } from './property-binding-example.component';

describe('PropertyBindingExampleComponent', () => {
  let component: PropertyBindingExampleComponent;
  let fixture: ComponentFixture<PropertyBindingExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyBindingExampleComponent]
    });
    fixture = TestBed.createComponent(PropertyBindingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
