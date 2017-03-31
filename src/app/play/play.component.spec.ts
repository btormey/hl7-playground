import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { PlayComponent } from './play.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ParserComponent } from './parser/parser.component';
import { Hl7SegmentComponent } from './hl7-segment/hl7-segment.component';

describe('PlayComponent', () => {
  let component: PlayComponent;
  let fixture: ComponentFixture<PlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlayComponent,
        SidebarComponent,
        ParserComponent,
        Hl7SegmentComponent
      ],
      imports: [
        FormsModule,
        MaterialModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
