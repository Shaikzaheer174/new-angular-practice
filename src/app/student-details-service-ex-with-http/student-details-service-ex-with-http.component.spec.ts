import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailsServiceExWithHttpComponent } from './student-details-service-ex-with-http.component';

describe('StudentDetailsServiceExWithHttpComponent', () => {
  let component: StudentDetailsServiceExWithHttpComponent;
  let fixture: ComponentFixture<StudentDetailsServiceExWithHttpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDetailsServiceExWithHttpComponent]
    });
    fixture = TestBed.createComponent(StudentDetailsServiceExWithHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
