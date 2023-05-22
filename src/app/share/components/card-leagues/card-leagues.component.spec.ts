import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLeaguesComponent } from './card-leagues.component';

describe('CardLeaguesComponent', () => {
  let component: CardLeaguesComponent;
  let fixture: ComponentFixture<CardLeaguesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLeaguesComponent]
    });
    fixture = TestBed.createComponent(CardLeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
