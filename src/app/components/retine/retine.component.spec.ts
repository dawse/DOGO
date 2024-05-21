import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetineComponent } from './retine.component';

describe('RetineComponent', () => {
  let component: RetineComponent;
  let fixture: ComponentFixture<RetineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
