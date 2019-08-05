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
  
  default_img: any;
  posts$: Observable<any[]>;

  constructor(private postService: PostsService) {
    this.default_img = "http://4.bp.blogspot.com/-_NZ3p4rLzYw/UQfUpgVoLLI/AAAAAAAAgzo/5Mq4Egpx4Bc/s1600/Great-Mountains-mountains-and-waterfalls-9841962-1920-1440.jpg";
    this.posts$ = this.postService.getPostsList(); 
  }
} 
