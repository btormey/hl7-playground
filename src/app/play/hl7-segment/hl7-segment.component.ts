import { Component, OnInit, Input } from '@angular/core';
import { Hl7Segment } from '../../entities/hl7-segment';

@Component({
  selector: 'app-hl7-segment',
  templateUrl: './hl7-segment.component.html',
  styleUrls: ['./hl7-segment.component.scss']
})
export class Hl7SegmentComponent implements OnInit {
  @Input() segment: Hl7Segment;
  constructor() { }

  ngOnInit() {
  }

}
