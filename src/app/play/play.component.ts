import { Component } from '@angular/core';
import { Hl7Service } from '../services/hl7.service';
import { Hl7Message } from '../entities/hl7-message';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
  providers: [ Hl7Service ]
})
export class PlayComponent {
  parsed: Hl7Message = new Hl7Message('');
  constructor() { }

  onMessageParsed(parsed: Hl7Message) {
    this.parsed = parsed;
  }
}
