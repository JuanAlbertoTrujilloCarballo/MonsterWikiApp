import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectEntreeComponent } from './object-entree.component';

describe('ObjectEntreeComponent', () => {
  let component: ObjectEntreeComponent;
  let fixture: ComponentFixture<ObjectEntreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectEntreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectEntreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
