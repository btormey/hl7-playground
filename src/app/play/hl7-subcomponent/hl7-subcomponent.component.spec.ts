import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hl7SubcomponentComponent } from './hl7-subcomponent.component';

describe('Hl7SubcomponentComponent', () => {
  let component: Hl7SubcomponentComponent;
  let fixture: ComponentFixture<Hl7SubcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hl7SubcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hl7SubcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
