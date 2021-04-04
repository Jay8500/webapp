import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtabsComponent } from './showtabs.component';

describe('ShowtabsComponent', () => {
  let component: ShowtabsComponent;
  let fixture: ComponentFixture<ShowtabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowtabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
