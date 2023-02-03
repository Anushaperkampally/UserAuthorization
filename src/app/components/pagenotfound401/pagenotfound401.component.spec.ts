import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagenotfound401Component } from './pagenotfound401.component';

describe('Pagenotfound401Component', () => {
  let component: Pagenotfound401Component;
  let fixture: ComponentFixture<Pagenotfound401Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagenotfound401Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagenotfound401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
