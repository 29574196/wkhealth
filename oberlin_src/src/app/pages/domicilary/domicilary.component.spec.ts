import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomicilaryComponent } from './domicilary.component';

describe('DomicilaryComponent', () => {
  let component: DomicilaryComponent;
  let fixture: ComponentFixture<DomicilaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomicilaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomicilaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
