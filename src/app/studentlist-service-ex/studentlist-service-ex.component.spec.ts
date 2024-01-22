import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentlistServiceExComponent } from './studentlist-service-ex.component';

describe('StudentlistServiceExComponent', () => {
  let component: StudentlistServiceExComponent;
  let fixture: ComponentFixture<StudentlistServiceExComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentlistServiceExComponent]
    });
    fixture = TestBed.createComponent(StudentlistServiceExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
