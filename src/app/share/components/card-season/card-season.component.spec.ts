import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSeasonComponent } from './card-season.component';

describe('CardSeasonComponent', () => {
  let component: CardSeasonComponent;
  let fixture: ComponentFixture<CardSeasonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSeasonComponent]
    });
    fixture = TestBed.createComponent(CardSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
