import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  articles: any[] = [];
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
        this.error = `Error fetching articles: ${err.message}`;
      }
    });
  }
}
