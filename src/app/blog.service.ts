import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iblog } from './blog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private api_url = './assets/data/posts.json';
  constructor(private http: HttpClient) { }
  getBlog(): Observable<Iblog[]>{
    return this.http.get<Iblog[]>(this.api_url);
  }
}
