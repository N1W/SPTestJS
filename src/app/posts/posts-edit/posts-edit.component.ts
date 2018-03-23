import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

import {PostService} from "../../posts.service";
import {Post} from "../post.module";
import {Response} from "@angular/http";

@Component({
  selector: 'app-posts-edit',
  templateUrl: './posts-edit.component.html',
  styleUrls: ['./posts-edit.component.scss']
})
export class PostsEditComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;
  currentPost: Post = {
    ownerId: 1,
    id: 1,
    title: "",
    body: ""
  };

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.postService.loading()
      .subscribe(
        (response: Response) => {
          this.currentPost = this.postService.getPostsById(this.route.snapshot.params["id"]).item;
        }
      );

  }

  updateEl(form: NgForm){
    this.postService.editPost(this.route.snapshot.params["id"], form.value.title, form.value.body);
  }

}
