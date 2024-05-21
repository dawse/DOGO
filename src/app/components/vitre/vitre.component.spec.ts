import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitreComponent } from './vitre.component';

describe('VitreComponent', () => {
  let component: VitreComponent;
  let fixture: ComponentFixture<VitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VitreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
