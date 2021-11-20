import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetPostsInterface } from './types/getPostsInterface';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  readonly ROOT_API = "https://619783bd5953f10017d23daa.mockapi.io/";

  constructor(private http: HttpClient) {}

  public getPosts(): Observable<GetPostsInterface> {
    return this.http.get<GetPostsInterface>(this.ROOT_API + '/post');
  };

}
