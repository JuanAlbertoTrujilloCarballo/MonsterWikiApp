import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualMonsterListComponent } from './individual-monster-list.component';

describe('IndividualMonsterListComponent', () => {
  let component: IndividualMonsterListComponent;
  let fixture: ComponentFixture<IndividualMonsterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualMonsterListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualMonsterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
