import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorneeComponent } from './cornee.component';

describe('CorneeComponent', () => {
  let component: CorneeComponent;
  let fixture: ComponentFixture<CorneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorneeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
