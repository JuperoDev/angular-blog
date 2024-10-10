import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogContentComponent } from './blog-content/blog-content.component';
import { BlogPageComponent } from "./blog-page/blog-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlogContentComponent, BlogPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-blog';
}
