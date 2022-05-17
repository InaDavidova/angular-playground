import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type TList = TPost[]

export type TPost = {
  userId: number
  id: number
  title: string
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private list: TList = [];

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  add() {
    const post: TPost  = {
      userId: 123,
      id: 1,
      title: 'post1',
      body: '...',
    };

    return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
  }

  delete(id:number){
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

  }
}
