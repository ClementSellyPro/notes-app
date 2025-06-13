import { Component } from '@angular/core';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteInformationComponent } from './components/note-information/note-information.component';
import { NoteControlsComponent } from './components/note-controls/note-controls.component';

@Component({
  selector: 'app-root',
  imports: [
    SideBarComponent,
    HeaderComponent,
    NoteListComponent,
    NoteInformationComponent,
    NoteControlsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
