import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunBuddiesComponent } from './gun-buddies.component';

describe('GunBuddiesComponent', () => {
  let component: GunBuddiesComponent;
  let fixture: ComponentFixture<GunBuddiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GunBuddiesComponent]
    });
    fixture = TestBed.createComponent(GunBuddiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
