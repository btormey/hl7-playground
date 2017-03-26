import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SidebarComponent } from './play/sidebar/sidebar.component';
import { LearnComponent } from './learn/learn.component';
import { PlayComponent } from './play/play.component';
import { ParserComponent } from './play/parser/parser.component';
import { Hl7SegmentComponent } from './play/hl7-segment/hl7-segment.component';
import { Hl7FieldComponent } from './play/hl7-field/hl7-field.component';
import { Hl7ComponentComponent } from './play/hl7-component/hl7-component.component';
import { Hl7SubcomponentComponent } from './play/hl7-subcomponent/hl7-subcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SidebarComponent,
    LearnComponent,
    PlayComponent,
    ParserComponent,
    Hl7SegmentComponent,
    Hl7FieldComponent,
    Hl7ComponentComponent,
    Hl7SubcomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
