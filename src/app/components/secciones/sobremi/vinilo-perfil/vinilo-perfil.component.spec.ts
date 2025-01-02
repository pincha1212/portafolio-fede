import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViniloPerfilComponent } from './vinilo-perfil.component';

describe('ViniloPerfilComponent', () => {
  let component: ViniloPerfilComponent;
  let fixture: ComponentFixture<ViniloPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViniloPerfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViniloPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
