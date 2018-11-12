import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCardOverlayComponent } from './shopping-card-overlay.component';

describe('ShoppingCardOverlayComponent', () => {
  let component: ShoppingCardOverlayComponent;
  let fixture: ComponentFixture<ShoppingCardOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCardOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCardOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
