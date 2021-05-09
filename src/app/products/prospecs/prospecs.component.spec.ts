import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspecsComponent } from './prospecs.component';

describe('ProspecsComponent', () => {
  let component: ProspecsComponent;
  let fixture: ComponentFixture<ProspecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProspecsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
