import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorIdSerieComponent } from './por-id-serie.component';

describe('PorIdSerieComponent', () => {
  let component: PorIdSerieComponent;
  let fixture: ComponentFixture<PorIdSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorIdSerieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorIdSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
