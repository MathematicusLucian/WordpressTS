import { Component, OnInit } from '@angular/core';

import { PostsService } from '../services/posts.service';
import { Post } from '../layout/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  dataPosts = [];

  constructor(private postService: PostsService) { }

  ngOnInit() {
    console.log(this.getPostsList());
  }

  getPostsList(){
    this.postService.getPostsList().subscribe(
      (res: any) => {  
        this.dataPosts = res;
      },
      (err) => {
        //this.error = err; 
      }
    );
    return this.dataPosts;
  }

}
