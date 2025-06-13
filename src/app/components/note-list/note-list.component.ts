import { Component, OnInit } from '@angular/core';
import { NoteItemComponent } from '../note-item/note-item.component';
import { NotesService } from '../../services/notes.service';
import { NoteType } from '../../models/note.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-note-list',
  imports: [
    NoteItemComponent,
    AsyncPipe
  ],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent implements OnInit {
  // noteList: BehaviorSubject<NoteType[]> = new BehaviorSubject<NoteType[]>([]);
  noteList$!: Observable<NoteType[]>;

  constructor (private notesService: NotesService){}

  ngOnInit(): void {
    this.noteList$ = this.notesService.getAllNotes();
  }

  onNoteSelection(id: string) {
    this.notesService.noteSelection(id);
  }
}
