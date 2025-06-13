import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NoteType } from '../../models/note.model';

@Component({
  selector: 'app-note-information',
  imports: [
    MatIcon
  ],
  templateUrl: './note-information.component.html',
  styleUrl: './note-information.component.css'
})
export class NoteInformationComponent {
  currentNote!: NoteType;
}
