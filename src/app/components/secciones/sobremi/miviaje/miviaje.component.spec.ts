import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiviajeComponent } from './miviaje.component';

describe('MiviajeComponent', () => {
  let component: MiviajeComponent;
  let fixture: ComponentFixture<MiviajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiviajeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiviajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
