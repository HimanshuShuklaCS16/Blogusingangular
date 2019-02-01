import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import {Post} from './models/Post.model';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts:Observable<any[]>;
    constructor(db:AngularFirestore) {
  this.posts=db.collection('posts').valueChanges(); }
  getPosts(){
    return this.posts;
  }
}
