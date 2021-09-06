import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddBlogComponent } from './add-blog/add-blog.component';


@NgModule({
  declarations: [BlogsComponent, AddBlogComponent],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class BlogsModule { }
