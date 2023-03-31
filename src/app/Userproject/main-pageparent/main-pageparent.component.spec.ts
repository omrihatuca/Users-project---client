import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageparentComponent } from './main-pageparent.component';

describe('MainPageparentComponent', () => {
  let component: MainPageparentComponent;
  let fixture: ComponentFixture<MainPageparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
