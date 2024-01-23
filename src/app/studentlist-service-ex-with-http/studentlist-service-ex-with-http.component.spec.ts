import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentlistServiceExWithHttpComponent } from './studentlist-service-ex-with-http.component';

describe('StudentlistServiceExWithHttpComponent', () => {
  let component: StudentlistServiceExWithHttpComponent;
  let fixture: ComponentFixture<StudentlistServiceExWithHttpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentlistServiceExWithHttpComponent]
    });
    fixture = TestBed.createComponent(StudentlistServiceExWithHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
