import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcartsComponent } from './showcarts.component';

describe('ShowcartsComponent', () => {
  let component: ShowcartsComponent;
  let fixture: ComponentFixture<ShowcartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
