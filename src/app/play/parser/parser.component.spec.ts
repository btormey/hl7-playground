import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { ParserComponent } from './parser.component';
import { Hl7SegmentComponent } from '../hl7-segment/hl7-segment.component';
import { Hl7Service } from '../../services/hl7.service';
import { Hl7Message } from '../../entities/hl7-message';
import { simpleMessage } from '../../../samples/simple';

describe('ParserComponent', () => {
  let component: ParserComponent;
  let fixture: ComponentFixture<ParserComponent>;
  let hl7ServiceStub: Hl7Service;
  let hl7Service: Hl7Service;

  beforeEach(async(() => {
    hl7ServiceStub = {
      parseMessage(message: string): Hl7Message {
        return new Hl7Message(message);
      }
    };

    TestBed.configureTestingModule({
      declarations: [
        ParserComponent,
        Hl7SegmentComponent
      ],
      providers: [{ provide: Hl7Service, useValue: hl7ServiceStub }],
      imports: [
        MaterialModule.forRoot(),
        FormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParserComponent);
    hl7Service = TestBed.get(Hl7Service);
    spyOn(hl7Service, 'parseMessage').and.callThrough();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the HL7 service for message parsing', () => {
    component.input = simpleMessage.value;
    component.parseMessage();
    expect(hl7Service.parseMessage).toHaveBeenCalledWith(simpleMessage.value);
  });

  it('should have the ability to clear input', () => {
    component.input = 'value';
    component.clear();
    expect(component.input).toBe('');
  });
});
