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
  default_img: any;
  posts$: Observable<any[]>;

  constructor(private route: ActivatedRoute, private postService: PostsService) {
    this.slug = this.route.snapshot.paramMap.get('id'); 
    this.default_img = "http://4.bp.blogspot.com/-_NZ3p4rLzYw/UQfUpgVoLLI/AAAAAAAAgzo/5Mq4Egpx4Bc/s1600/Great-Mountains-mountains-and-waterfalls-9841962-1920-1440.jpg";
    this.posts$ = this.postService.getPost(this.slug); 
  }
} 
