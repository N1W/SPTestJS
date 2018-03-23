import { Component, OnInit } from '@angular/core';
import {Response} from "@angular/http";

import {PostService} from "../../posts.service";
import {Post} from "../post.module";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts: Post[];
  subscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.subscription = this.postService.postChanged
      .subscribe(
        (posts: Post[]) => {
          this.posts = posts;
        }
      )

  }

}
