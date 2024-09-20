import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service'; // Adjust path as per your project structure

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: any[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe(data => {
      this.notes = data;
    });
  }
}
