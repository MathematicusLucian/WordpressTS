import { Component, OnInit } from '@angular/core';

import { PostsService } from '../services/posts.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  dataPosts;
  error = "";

  constructor(private postService: PostsService) { }

  ngOnInit() { 
    this.getPostsList();
  }

  getPostsList(){
    console.log(this.postService.getPostsList());
    this.postService.getPostsList()
      .subscribe(res => this.dataPosts = res, error => this.error = error);
    console.log(this.dataPosts);
    return this.dataPosts;
  }

}
