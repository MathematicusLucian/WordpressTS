import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySingleComponent } from './category-single.component';

describe('CategorySingleComponent', () => {
  let component: CategorySingleComponent;
  let fixture: ComponentFixture<CategorySingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorySingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
