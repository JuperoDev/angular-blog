import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  
import { BlogPageComponent} from './blog-page.component'
@NgModule({
  declarations: [
    BlogPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule  
  ],
  exports: [
    BlogPageComponent
  ]
})
export class BlogModule { }