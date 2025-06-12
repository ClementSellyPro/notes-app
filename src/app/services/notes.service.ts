import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NoteType } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  allNotes: BehaviorSubject<NoteType[]> = new BehaviorSubject<NoteType[]>([]);
  allNotes$: Observable<NoteType[]> = this.allNotes.asObservable();

  isAllNotesSelected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  isAllNotesSelected$: Observable<boolean> = this.isAllNotesSelected.asObservable();

  constructor() {
    this.allNotes.next([
      {
        id: '01',
        title: 'The first note',
        lastEdited: Date.now(),
        text: 'This is the first note',
        tag: 'Professionnal',
        isArchived: false
      },
      {
        id: '02',
        title: 'The first archived note',
        lastEdited: Date.now(),
        text: 'This is the first archived note',
        tag: 'Professionnal',
        isArchived: true
      }
    ])
  }

  filterSelection(){
    this.isAllNotesSelected.next(!this.isAllNotesSelected.value);
  }
}
