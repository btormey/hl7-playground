import { Component, OnInit } from '@angular/core';
import { Hl7Service } from '../services/hl7.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
  providers: [ Hl7Service ]
})
export class PlayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
