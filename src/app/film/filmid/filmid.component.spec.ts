import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmidComponent } from './filmid.component';

describe('FilmidComponent', () => {
  let component: FilmidComponent;
  let fixture: ComponentFixture<FilmidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
