import { Injectable } from '@angular/core'; 
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs'; 
import { map, catchError } from 'rxjs/operators';  

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private apiUrl = 'https://poststatus.com/wp-json/wp/v2/';

	constructor(private http: HttpClient) { }   

	getPostsList(): Observable<any> { 
    console.log(this.apiUrl + 'posts?_embed=true');
		let response = this.http.get(this.apiUrl + 'posts?_embed=true').pipe(
      map((res: Response) => res.json()));
    console.log(response);
    return response;
	}

	getPost(slug: string): Observable<any> {  
		let response = this.http.get(this.apiUrl + `posts?slug=${slug}`).pipe( 
			map((res: Response) => res.json()));
    return response;
	} 

}
