import { Component, OnInit } from '@angular/core';
import { PostsService} from '../posts.service';
import {Post} from '../models/Post.model';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
posts1:Post[];
  constructor(private postsservice : PostsService) { }

  ngOnInit() {
    this.postsservice.getPosts().subscribe(posts=>{
    this.posts1=posts;
    });
  }

}
