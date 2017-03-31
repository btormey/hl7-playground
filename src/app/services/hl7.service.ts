import { Injectable } from '@angular/core';
import { Hl7Message } from '../entities/hl7-message';

@Injectable()
export class Hl7Service {

  constructor() { }

  parseMessage(message: string): Hl7Message {
    return new Hl7Message(message).parse();
  }

}
