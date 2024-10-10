import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogContentComponent } from './blog-content/blog-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BlogContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-blog';
}
