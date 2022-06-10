import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManpowerLandingPageComponent } from './manpower-landing-page.component';

describe('ManpowerLandingPageComponent', () => {
  let component: ManpowerLandingPageComponent;
  let fixture: ComponentFixture<ManpowerLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManpowerLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManpowerLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
