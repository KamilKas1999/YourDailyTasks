import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinischedComponent } from './finisched.component';

describe('FinischedComponent', () => {
  let component: FinischedComponent;
  let fixture: ComponentFixture<FinischedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinischedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinischedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
