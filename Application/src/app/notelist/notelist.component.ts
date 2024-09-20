import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.css']
})
export class NotelistComponent implements OnInit {
  notes: any[] = [];
  filteredNotes: any[] = [];
  searchText: string = '';

  constructor(private noteService: NoteService, private router: Router) {}

  ngOnInit(): void {
    this.fetchNotes();
  }

  fetchNotes(): void {
    this.noteService.getNotes().subscribe(
      (notes: any[]) => {
        this.notes = notes;
        this.applySearchFilter(); // Apply filter on initial load
      },
      (error: any) => {
        console.error('Error fetching notes:', error);
      }
    );
  }

  applySearchFilter(): void {
    if (this.searchText.trim() === '') {
      this.filteredNotes = this.notes; // Display original notes when search text is empty
    } else {
      this.filteredNotes = this.notes.filter(note =>
        note.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  onSearch(event: Event): void {
    event.preventDefault();
    this.applySearchFilter();

    // Redirect to original page if searchText is empty
    if (this.searchText.trim() === '') {
      this.router.navigateByUrl('/notelist');
    }
  }

  // Method to generate the URL to the PDF file
  getNotePdfUrl(pdfPath: string): string {
    return `http://localhost:5000/${pdfPath}`;
  }

  // Method to open the PDF in a new tab
  openPdfInNewTab(pdfPath: string): void {
    const pdfUrl = this.getNotePdfUrl(pdfPath);
    window.open(pdfUrl, '_blank');
  }
}
