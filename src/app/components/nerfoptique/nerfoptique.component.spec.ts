import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NerfoptiqueComponent } from './nerfoptique.component';

describe('NerfoptiqueComponent', () => {
  let component: NerfoptiqueComponent;
  let fixture: ComponentFixture<NerfoptiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NerfoptiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NerfoptiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
