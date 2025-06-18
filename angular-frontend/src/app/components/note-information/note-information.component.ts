import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NoteType } from '../../models/note.model';
import { NotesService } from '../../services/notes.service';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-note-information',
  imports: [
    MatIcon,
    AsyncPipe,
    DatePipe
  ],
  templateUrl: './note-information.component.html',
  styleUrl: './note-information.component.css'
})
export class NoteInformationComponent implements OnInit {
  currentNote$!: Observable<NoteType>;
  title!: string;

  constructor(private notesService: NotesService){}

  ngOnInit(): void {
    this.currentNote$ = this.notesService.currentNote$;
  }
}
