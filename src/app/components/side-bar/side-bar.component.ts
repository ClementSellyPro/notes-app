import { AsyncPipe, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BehaviorSubject, Observable } from 'rxjs';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-side-bar',
  imports: [
    MatIconModule,
    NgClass,
    AsyncPipe
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {
  isAllNotesSelected$!: Observable<boolean>;

  constructor(private notesService: NotesService){}

  ngOnInit(): void {
    this.isAllNotesSelected$ = this.notesService.isAllNotesSelected$;
  }

  onFilterSelection() {
    this.notesService.filterSelection();
  }
}
