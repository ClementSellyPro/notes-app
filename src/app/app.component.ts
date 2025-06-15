import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteInformationComponent } from './components/note-information/note-information.component';
import { NoteControlsComponent } from './components/note-controls/note-controls.component';
import { AddNoteModalComponent } from './components/add-note-modal/add-note-modal.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { NotesService } from './services/notes.service';

@Component({
  selector: 'app-root',
  imports: [
    SideBarComponent,
    HeaderComponent,
    NoteListComponent,
    NoteInformationComponent,
    NoteControlsComponent,
    AddNoteModalComponent,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isModalOpened$!: Observable<boolean>;

  constructor(private notesService: NotesService){}

  ngOnInit(): void {
    this.isModalOpened$ = this.notesService.isModalOpen$;
  }
}
