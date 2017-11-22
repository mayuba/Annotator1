import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCorpusComponent } from './gestionCorpus.component';

describe('GestionCorpusComponent', () => {
  let component: GestionCorpusComponent;
  let fixture: ComponentFixture<GestionCorpusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionCorpusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCorpusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
