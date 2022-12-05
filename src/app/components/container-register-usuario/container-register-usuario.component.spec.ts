import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerRegisterUsuarioComponent } from './container-register-usuario.component';

describe('ContainerRegisterUsuarioComponent', () => {
  let component: ContainerRegisterUsuarioComponent;
  let fixture: ComponentFixture<ContainerRegisterUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerRegisterUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerRegisterUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
