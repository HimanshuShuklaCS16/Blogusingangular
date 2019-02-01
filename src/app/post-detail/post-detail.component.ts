import { Component, OnInit } from '@angular/core';
import { PostsService} from '../posts.service';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  constructor(private postsservice : PostsService) { }

  ngOnInit() {
  }

}
