import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SttingComponent } from './stting.component';

describe('SttingComponent', () => {
  let component: SttingComponent;
  let fixture: ComponentFixture<SttingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SttingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SttingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
