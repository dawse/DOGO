import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CristallinComponent } from './cristallin.component';

describe('CristallinComponent', () => {
  let component: CristallinComponent;
  let fixture: ComponentFixture<CristallinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CristallinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CristallinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
