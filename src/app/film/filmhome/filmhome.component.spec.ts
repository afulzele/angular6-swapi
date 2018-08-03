import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmhomeComponent } from './filmhome.component';

describe('FilmhomeComponent', () => {
  let component: FilmhomeComponent;
  let fixture: ComponentFixture<FilmhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
