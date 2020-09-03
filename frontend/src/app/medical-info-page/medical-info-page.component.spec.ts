import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalInfoPageComponent } from './medical-info-page.component';

describe('MedicalInfoPageComponent', () => {
  let component: MedicalInfoPageComponent;
  let fixture: ComponentFixture<MedicalInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalInfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
