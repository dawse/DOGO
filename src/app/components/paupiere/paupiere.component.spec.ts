import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaupiereComponent } from './paupiere.component';

describe('PaupiereComponent', () => {
  let component: PaupiereComponent;
  let fixture: ComponentFixture<PaupiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaupiereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaupiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
