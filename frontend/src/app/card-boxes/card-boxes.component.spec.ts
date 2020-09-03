import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBoxesComponent } from './card-boxes.component';

describe('CardBoxesComponent', () => {
  let component: CardBoxesComponent;
  let fixture: ComponentFixture<CardBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
