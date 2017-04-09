import { Component, OnInit, Input } from '@angular/core';
import { Hl7Component } from '../../entities/hl7-component';

@Component({
  selector: 'app-hl7-component',
  templateUrl: './hl7-component.component.html',
  styleUrls: ['./hl7-component.component.scss']
})
export class Hl7ComponentComponent implements OnInit {
  @Input() component: Hl7Component;
  constructor() { }

  ngOnInit() {
  }

}
