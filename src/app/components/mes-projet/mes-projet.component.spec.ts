import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesProjetComponent } from './mes-projet.component';

describe('MesProjetComponent', () => {
  let component: MesProjetComponent;
  let fixture: ComponentFixture<MesProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
