import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerUsuarioComponent } from './container-usuario.component';

describe('ContainerUsuarioComponent', () => {
  let component: ContainerUsuarioComponent;
  let fixture: ComponentFixture<ContainerUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
