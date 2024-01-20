import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfDirectiveExampleComponent } from './ng-if-directive-example.component';

describe('NgIfDirectiveExampleComponent', () => {
  let component: NgIfDirectiveExampleComponent;
  let fixture: ComponentFixture<NgIfDirectiveExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgIfDirectiveExampleComponent]
    });
    fixture = TestBed.createComponent(NgIfDirectiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
