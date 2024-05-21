import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SclereComponent } from './sclere.component';

describe('SclereComponent', () => {
  let component: SclereComponent;
  let fixture: ComponentFixture<SclereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SclereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SclereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
