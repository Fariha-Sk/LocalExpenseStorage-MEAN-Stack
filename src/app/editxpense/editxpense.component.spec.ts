import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditxpenseComponent } from './editxpense.component';

describe('EditxpenseComponent', () => {
  let component: EditxpenseComponent;
  let fixture: ComponentFixture<EditxpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditxpenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditxpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
