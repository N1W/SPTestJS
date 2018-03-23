import { Component, OnInit } from '@angular/core';
import {Response} from "@angular/http";
import {ActivatedRoute} from "@angular/router";

import {PostService} from "../../posts.service";
import {Post} from "../../posts/post.module";


@Component({
  selector: 'app-comments-list',
  templateUrl: 'comments-list.component.html',
  styleUrls: ['comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {
  post: Post;
  comments: any[];
  loading: boolean;
  empty: boolean = true;


  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.postService.loading()
      .subscribe(
        (response: Response) => {
          this.post = this.postService.getPostsById(this.route.snapshot.params["id"]).item;
          this.loading = this.postService.getPostsById(this.route.snapshot.params["id"]).status;
        }
      );

    this.postService.getComments(this.route.snapshot.params["id"])
      .subscribe(
        (response: Response) => {
          this.comments = response.json();
          this.comments.length == 0 ? this.empty = true : this.empty = false;
        },
        (error) => console.log(error)
      );
  }

}
