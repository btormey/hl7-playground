import { Component, OnInit, Input } from '@angular/core';
import { Hl7Segment } from '../../entities/hl7-segment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() segments: Hl7Segment[];
  constructor() { }

  ngOnInit() {
  }
}
