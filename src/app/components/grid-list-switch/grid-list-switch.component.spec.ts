import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListSwitchComponent } from './grid-list-switch.component';

describe('GridListSwitchComponent', () => {
  let component: GridListSwitchComponent;
  let fixture: ComponentFixture<GridListSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridListSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridListSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
