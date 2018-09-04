import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendPriceComponent } from './send-price.component';

describe('SendPriceComponent', () => {
  let component: SendPriceComponent;
  let fixture: ComponentFixture<SendPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
