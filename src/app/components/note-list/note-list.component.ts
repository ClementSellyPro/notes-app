import { Component } from '@angular/core';
import { NoteItemComponent } from '../note-item/note-item.component';

@Component({
  selector: 'app-note-list',
  imports: [
    NoteItemComponent
  ],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent {

}
