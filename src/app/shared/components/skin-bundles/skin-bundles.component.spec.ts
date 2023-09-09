import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinBundlesComponent } from './skin-bundles.component';

describe('SkinBundlesComponent', () => {
  let component: SkinBundlesComponent;
  let fixture: ComponentFixture<SkinBundlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkinBundlesComponent]
    });
    fixture = TestBed.createComponent(SkinBundlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
