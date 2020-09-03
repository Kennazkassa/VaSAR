import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounselingInfoPageComponent } from './counseling-info-page.component';

describe('CounselingInfoPageComponent', () => {
  let component: CounselingInfoPageComponent;
  let fixture: ComponentFixture<CounselingInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounselingInfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounselingInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
