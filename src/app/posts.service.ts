import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {ActivatedRoute} from "@angular/router";

import {Post} from "./posts/post.module";
import {Subject} from "rxjs";
import "rxjs/Rx"

@Injectable()
export class PostService {
  postChanged = new Subject<Post[]>();
  posts: Post[]= [];

  constructor(private http: Http, private route: ActivatedRoute) {}

  setPosts(){
    this.http.get("https://jsonplaceholder.typicode.com/posts")
      .subscribe(
        (response: Response) => {
          this.posts = response.json();
          this.postChanged.next(this.posts.slice());
        }
      )
  }

  loading(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }

  getPosts(){
    return this.posts.slice();
  }

  getPostsById(id){
    for (let item of this.posts){
      if(item.id == id){
        let status = true;
        let data = {
          item: item,
          status: status
        };
        return data;
      }
    }
  }

  getComments(id){
    return this.http.get("https://jsonplaceholder.typicode.com/posts/" + id + "/comments");
  }

  deletePost(post: Post){
    this.posts.splice(this.posts.indexOf(post), 1);
    this.postChanged.next(this.posts.slice());
  }

  addPost(post: Post){
    this.posts.push(post);
    this.postChanged.next(this.posts.slice());
  }

  editPost(id, title, body){
    this.posts.forEach(function(item, i) {
     if(item.id == id ){
       item.title = title;
       item.body = body;
     }
    });
    this.postChanged.next(this.posts.slice());
  }

}
