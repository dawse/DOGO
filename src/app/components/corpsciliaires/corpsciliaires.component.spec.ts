import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpsciliairesComponent } from './corpsciliaires.component';

describe('CorpsciliairesComponent', () => {
  let component: CorpsciliairesComponent;
  let fixture: ComponentFixture<CorpsciliairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorpsciliairesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorpsciliairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
