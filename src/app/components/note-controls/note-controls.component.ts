import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NotesService } from '../../services/notes.service';
import { Observable, take } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-note-controls',
  imports: [
    MatIcon,
    AsyncPipe
  ],
  templateUrl: './note-controls.component.html',
  styleUrl: './note-controls.component.css'
})
export class NoteControlsComponent implements OnInit {
  isCurrentNoteArchived$!: Observable<boolean>;

  constructor(private notesService: NotesService){}

  ngOnInit(): void {
    this.isCurrentNoteArchived$ = this.notesService.isCurrentNoteArchived$;
  }

  onArchiveNote() {
    this.isCurrentNoteArchived$.pipe(take(1)).subscribe(isArchived => {
      isArchived ? this.notesService.unarchiveNote() : this.notesService.archiveNote()
    });
  }

  onDeleteNote() {
    this.notesService.deleteNote();
  }
}
