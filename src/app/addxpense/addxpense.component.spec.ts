import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddxpenseComponent } from './addxpense.component';

describe('AddxpenseComponent', () => {
  let component: AddxpenseComponent;
  let fixture: ComponentFixture<AddxpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddxpenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddxpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
