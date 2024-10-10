import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { CommonModule } from '@angular/common';
import { BlogPost } from '../services/blog.service';

@Component({
  selector: 'app-blog-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.scss']
})
export class BlogContentComponent implements OnInit {
  posts: BlogPost[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  // Fetch posts from the Firestore collection
  async loadPosts() {
    this.posts = await this.blogService.getAllPosts();
  }
}
