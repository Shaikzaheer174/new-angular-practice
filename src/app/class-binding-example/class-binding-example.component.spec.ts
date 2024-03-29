import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBindingExampleComponent } from './class-binding-example.component';

describe('ClassBindingExampleComponent', () => {
  let component: ClassBindingExampleComponent;
  let fixture: ComponentFixture<ClassBindingExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassBindingExampleComponent]
    });
    fixture = TestBed.createComponent(ClassBindingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
