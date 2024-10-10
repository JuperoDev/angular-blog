import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BlogPageComponent } from './blog-page/blog-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-blog-page></app-blog-page>`,
  imports: [HttpClientModule, BlogPageComponent]
})
export class AppComponent {}
