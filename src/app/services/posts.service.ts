import { Injectable } from '@angular/core'; 
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import 'rxjs/add/operator/map'
import { map, catchError } from 'rxjs/operators';  

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private apiUrl = 'https://www.sitepoint.com/wp-json/wp/v2/';

	constructor(private http: HttpClient) { }   

	getPostsList(): Observable<any> {  
		let response = this.http.get(this.apiUrl + 'posts?_embed=true').pipe(
      map((res: Response) => res.json()));
    return response;
	}

	getPost(slug: string): Observable<any> {  
		let response = this.http.get(this.apiUrl + `posts?slug=${slug}`).pipe( 
			map((res: Response) => res.json()));
    return response;
	} 

}
