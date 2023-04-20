import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarDineshComponent } from './nav-bar-dinesh.component';

describe('NavBarDineshComponent', () => {
  let component: NavBarDineshComponent;
  let fixture: ComponentFixture<NavBarDineshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarDineshComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarDineshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
