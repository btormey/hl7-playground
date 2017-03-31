import { Component, OnInit } from '@angular/core';
import { Hl7Message } from '../../entities/hl7-message';
import { Hl7Service } from '../../services/hl7.service';

@Component({
  selector: 'app-parser',
  templateUrl: './parser.component.html',
  styleUrls: ['./parser.component.scss']
})
export class ParserComponent implements OnInit {
  input: string;
  message: Hl7Message = new Hl7Message();
  constructor(private hl7Service: Hl7Service) { }

  parseMessage() {
    this.message = this.hl7Service.parseMessage(this.input);
  }

  clear() {
    this.input = '';
  }

  ngOnInit() {
  }
}
