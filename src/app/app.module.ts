import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostDetailComponent } from './post-dtail/post-dtail.component';
import { AddPostComponent } from './add-post/add-post.component';
import {PostsService} from './posts.service';
@NgModule({
  declarations: [
    AppComponent,
    PostDetailComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
