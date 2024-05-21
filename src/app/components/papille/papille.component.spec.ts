import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapilleComponent } from './papille.component';

describe('PapilleComponent', () => {
  let component: PapilleComponent;
  let fixture: ComponentFixture<PapilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PapilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PapilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
