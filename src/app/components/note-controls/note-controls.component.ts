import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-note-controls',
  imports: [
    MatIcon
  ],
  templateUrl: './note-controls.component.html',
  styleUrl: './note-controls.component.css'
})
export class NoteControlsComponent {
  onArchiveNote() {
    console.log('Archived');
  }

  onDeleteNote() {
    console.log('Deleted');
  }
}
