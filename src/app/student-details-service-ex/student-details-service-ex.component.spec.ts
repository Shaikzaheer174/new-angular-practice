import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailsServiceExComponent } from './student-details-service-ex.component';

describe('StudentDetailsServiceExComponent', () => {
  let component: StudentDetailsServiceExComponent;
  let fixture: ComponentFixture<StudentDetailsServiceExComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDetailsServiceExComponent]
    });
    fixture = TestBed.createComponent(StudentDetailsServiceExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
