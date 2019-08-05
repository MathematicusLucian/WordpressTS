import { Component } from '@angular/core';
import { Observable } from 'rxjs';

//import { Post } from '../model/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent {
  
  posts$: Observable<any[]>;

  constructor(private postService: PostsService) {
    this.posts$ = this.postService.getPostsList();

    console.log(this.posts$);
  }
} 
