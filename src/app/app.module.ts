import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppComponent } from './app.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AddPostComponent } from './add-post/add-post.component';
import {PostsService} from './posts.service';
import {environment} from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    PostDetailComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,  AngularFireModule.initializeApp(environment.firebase),AngularFireAuthModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
