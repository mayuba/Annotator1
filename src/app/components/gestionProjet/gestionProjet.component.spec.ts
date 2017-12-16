import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { gestionProjetComponent } from './gestionProjet.component';

describe('gestionProjetComponent', () => {
  let component: gestionProjetComponent;
  let fixture: ComponentFixture<gestionProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ gestionProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(gestionProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
