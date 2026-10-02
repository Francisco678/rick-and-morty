import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HaracterCard } from './haracter-card';

describe('HaracterCard', () => {
  let component: HaracterCard;
  let fixture: ComponentFixture<HaracterCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaracterCard],
    }).compileComponents();

    fixture = TestBed.createComponent(HaracterCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
