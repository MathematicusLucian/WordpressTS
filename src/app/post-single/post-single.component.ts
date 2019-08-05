import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

//import { Post } from '../model/post';
import { PostsService } from '../services/posts.service'; 

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.scss']
})
export class PostSingleComponent {
  
  slug: string;
  posts$: Observable<any[]>;

  constructor(private route: ActivatedRoute, private postService: PostsService) {
    this.slug = this.route.snapshot.paramMap.get('id'); 

    this.posts$ = this.postService.getPost(this.slug);

    console.log(this.posts$);
  }
} 
