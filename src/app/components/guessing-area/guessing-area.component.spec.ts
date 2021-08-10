import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessingAreaComponent } from './guessing-area.component';

describe('GuessingAreaComponent', () => {
  let component: GuessingAreaComponent;
  let fixture: ComponentFixture<GuessingAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuessingAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
