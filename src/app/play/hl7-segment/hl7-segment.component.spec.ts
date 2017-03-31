import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from '@angular/material';

import { Hl7SegmentComponent } from './hl7-segment.component';

describe('Hl7SegmentComponent', () => {
  let component: Hl7SegmentComponent;
  let fixture: ComponentFixture<Hl7SegmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hl7SegmentComponent ],
      imports: [ MaterialModule.forRoot() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hl7SegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
