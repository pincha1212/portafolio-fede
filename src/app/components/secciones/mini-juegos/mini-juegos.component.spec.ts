import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniJuegosComponent } from './mini-juegos.component';

describe('MiniJuegosComponent', () => {
  let component: MiniJuegosComponent;
  let fixture: ComponentFixture<MiniJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniJuegosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
