import { Component, Input, OnInit } from '@angular/core';
import { NoteType } from '../../models/note.model';
import { AsyncPipe, DatePipe, NgClass } from '@angular/common';
import { NotesService } from '../../services/notes.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-note-item',
  imports: [
    DatePipe,
    AsyncPipe,
    NgClass
  ],
  templateUrl: './note-item.component.html',
  styleUrl: './note-item.component.css'
})
export class NoteItemComponent implements OnInit {
  @Input() note!: NoteType;
  isSelected$!: Observable<boolean>;

  constructor(private notesService: NotesService){}

  ngOnInit(): void {
    this.isSelected$ = this.notesService.currentNote$.pipe(
      map(note => note?.id === this.note.id)
    )
  }

}
