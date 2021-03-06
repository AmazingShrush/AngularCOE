import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceUpdaterComponent } from './price-updater.component';

describe('PriceUpdaterComponent', () => {
  let component: PriceUpdaterComponent;
  let fixture: ComponentFixture<PriceUpdaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceUpdaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceUpdaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
