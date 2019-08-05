import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { map, catchError } from 'rxjs/operators';

//import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private apiUrl = 'https://www.sitepoint.com/wp-json/wp/v2/';
  //posts: Post[] = [];

	constructor(private http: HttpClient) { }   

  ngOnInit(){ 
  } 
  
	getPostsList(): Observable<any[]> {  //Post{
    return this.http.get<any[]>(this.apiUrl + 'posts?_embed=true', {
      params: {
        per_page: '6'
      }
    });
  } 
  
	getPost(): Observable<any[]> {  //Post{
    return this.http.get<any[]>(this.apiUrl + 'posts?slug=${slug}', {
      params: {
      }
    });
  }  

}
