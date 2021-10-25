import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XpenselistComponent } from './xpenselist.component';

describe('XpenselistComponent', () => {
  let component: XpenselistComponent;
  let fixture: ComponentFixture<XpenselistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XpenselistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XpenselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
