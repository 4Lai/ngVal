import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSectionHomeComponent } from './header-section-home.component';

describe('HeaderSectionHomeComponent', () => {
  let component: HeaderSectionHomeComponent;
  let fixture: ComponentFixture<HeaderSectionHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderSectionHomeComponent]
    });
    fixture = TestBed.createComponent(HeaderSectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
