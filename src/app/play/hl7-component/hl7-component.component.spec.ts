import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hl7ComponentComponent } from './hl7-component.component';

describe('Hl7ComponentComponent', () => {
  let component: Hl7ComponentComponent;
  let fixture: ComponentFixture<Hl7ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hl7ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hl7ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
