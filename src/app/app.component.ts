import { Component } from '@angular/core';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { NoteListComponent } from './components/note-list/note-list.component';

@Component({
  selector: 'app-root',
  imports: [
    SideBarComponent,
    HeaderComponent,
    NoteListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
