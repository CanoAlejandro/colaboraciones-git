import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardregisterComponent } from './cardregister.component';

describe('CardregisterComponent', () => {
  let component: CardregisterComponent;
  let fixture: ComponentFixture<CardregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
