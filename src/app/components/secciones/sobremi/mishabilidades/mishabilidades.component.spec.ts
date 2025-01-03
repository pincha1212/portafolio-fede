import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MishabilidadesComponent } from './mishabilidades.component';

describe('MishabilidadesComponent', () => {
  let component: MishabilidadesComponent;
  let fixture: ComponentFixture<MishabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MishabilidadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MishabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
