import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCategoriesComponent } from './popup-categories.component';

describe('PopupCategoriesComponent', () => {
  let component: PopupCategoriesComponent;
  let fixture: ComponentFixture<PopupCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupCategoriesComponent]
    });
    fixture = TestBed.createComponent(PopupCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
