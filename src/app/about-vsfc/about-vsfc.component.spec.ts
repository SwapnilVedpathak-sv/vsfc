import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutVsfcComponent } from './about-vsfc.component';

describe('AboutVsfcComponent', () => {
  let component: AboutVsfcComponent;
  let fixture: ComponentFixture<AboutVsfcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutVsfcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutVsfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
