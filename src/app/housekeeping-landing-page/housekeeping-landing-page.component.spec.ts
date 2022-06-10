import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousekeepingLandingPageComponent } from './housekeeping-landing-page.component';

describe('HousekeepingLandingPageComponent', () => {
  let component: HousekeepingLandingPageComponent;
  let fixture: ComponentFixture<HousekeepingLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousekeepingLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousekeepingLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
