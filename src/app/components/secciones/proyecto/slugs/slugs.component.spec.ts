import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlugsComponent } from './slugs.component';

describe('SlugsComponent', () => {
  let component: SlugsComponent;
  let fixture: ComponentFixture<SlugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlugsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
