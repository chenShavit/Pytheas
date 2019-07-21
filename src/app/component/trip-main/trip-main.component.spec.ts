import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripMainComponent } from './trip-main.component';

describe('TripMainComponent', () => {
  let component: TripMainComponent;
  let fixture: ComponentFixture<TripMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
