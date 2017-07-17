import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacaoPersonalizadaComponent } from './programacao-personalizada.component';

describe('ProgramacaoPersonalizadaComponent', () => {
  let component: ProgramacaoPersonalizadaComponent;
  let fixture: ComponentFixture<ProgramacaoPersonalizadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramacaoPersonalizadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramacaoPersonalizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
