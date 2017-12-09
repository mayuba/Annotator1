import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProjetComponent } from './SearchProjet.component';

describe('SearchProjetComponent', () => {
  let component: SearchProjetComponent;
  let fixture: ComponentFixture<SearchProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
