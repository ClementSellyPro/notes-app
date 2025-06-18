import { Component } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import {FormsModule} from '@angular/forms';
import { NoteType } from '../../models/note.model';

@Component({
  selector: 'app-add-note-modal',
  imports: [
    FormsModule
  ],
  templateUrl: './add-note-modal.component.html',
  styleUrl: './add-note-modal.component.css'
})
export class AddNoteModalComponent {
  title!: string;
  tagSelection!: string;
  noteContent!: string;

  constructor(private notesService: NotesService){}

  onAddNewNote() {
    const newNote: NoteType = {
      id: self.crypto.randomUUID(),
      title: this.title,
      lastEdited: Date(),
      text: this.noteContent,
      tag: this.tagSelection,
      isArchived: false
    }
    this.notesService.addNewNote(newNote);
    this.notesService.closeModal();
  }

  onCancelNewNote() {
    this.notesService.closeModal();
  }
}
