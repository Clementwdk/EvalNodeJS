import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomealariesComponent } from './homealaries.component';

describe('HomealariesComponent', () => {
  let component: HomealariesComponent;
  let fixture: ComponentFixture<HomealariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomealariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomealariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
