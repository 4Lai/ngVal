import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitiveTiersComponent } from './competitive-tiers.component';

describe('CompetitiveTiersComponent', () => {
  let component: CompetitiveTiersComponent;
  let fixture: ComponentFixture<CompetitiveTiersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompetitiveTiersComponent]
    });
    fixture = TestBed.createComponent(CompetitiveTiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
