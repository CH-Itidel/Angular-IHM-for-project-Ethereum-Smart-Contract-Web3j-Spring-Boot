import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeliverationComponent } from './confirm-deliveration.component';

describe('ConfirmDeliverationComponent', () => {
  let component: ConfirmDeliverationComponent;
  let fixture: ComponentFixture<ConfirmDeliverationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDeliverationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeliverationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
