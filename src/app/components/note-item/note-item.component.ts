import { Component, Input } from '@angular/core';
import { NoteType } from '../../models/note.model';
import { DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-note-item',
  imports: [
    DatePipe,
    NgClass
  ],
  templateUrl: './note-item.component.html',
  styleUrl: './note-item.component.css'
})
export class NoteItemComponent {
  @Input() note!: NoteType;
}
