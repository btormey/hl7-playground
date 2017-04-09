import { Component, Input } from '@angular/core';
import { Hl7Field } from '../../entities/hl7-field';

@Component({
  selector: 'app-hl7-field',
  templateUrl: './hl7-field.component.html',
  styleUrls: ['./hl7-field.component.scss']
})
export class Hl7FieldComponent {
  @Input() field: Hl7Field;
  constructor() { }
}
