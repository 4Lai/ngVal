import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponsSingleDetailsComponent } from './weapons-single-details.component';

describe('WeaponsSingleDetailsComponent', () => {
  let component: WeaponsSingleDetailsComponent;
  let fixture: ComponentFixture<WeaponsSingleDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeaponsSingleDetailsComponent]
    });
    fixture = TestBed.createComponent(WeaponsSingleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
