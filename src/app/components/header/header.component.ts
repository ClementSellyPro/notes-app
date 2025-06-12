import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-header',
  imports: [
    MatIcon
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  title!: string;

  constructor(private notesService: NotesService){}

  ngOnInit(): void {
    this.notesService.isAllNotesSelected$.subscribe(filter => {
      if(filter) {
        this.title = 'All Notes';
      } else {
        this.title = 'Archived Notes';
      }
    })
  }
}
