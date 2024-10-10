import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css'],
  imports: [CommonModule] 
})
export class BlogPageComponent implements OnInit {
  articles: any[] = []; // guarda articulos
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchArticles();
  }

  fetchArticles(): void {
    const url = 'https://firestore.googleapis.com/v1/projects/blog-a2581/databases/(default)/documents/articles';
    this.http.get<{ documents: any[] }>(url).subscribe({
      next: (response) => {
        this.articles = response.documents.map(doc => ({
          id: doc.name.split('/').pop(),
          ...doc.fields
        }));
      },
      error: (err) => {
        this.error = `Error: ${err.message}`;
      }
    });
  }
}
