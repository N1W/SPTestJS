import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {PostService} from "../../posts.service";
import {Post} from "../post.module";

@Component({
  selector: 'app-posts-add',
  templateUrl: 'posts-add.component.html',
  styleUrls: ['posts-add.component.scss']
})
export class PostsAddComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addEl(form: NgForm){
    (this.postService.getPosts().length == 0)
      ? this.postService.addPost(new Post(1, 101, form.value.title, form.value.body))
      : this.postService.addPost(new Post(1, this.postService.getPosts()[this.postService.getPosts().length-1].id + 101, form.value.title, form.value.body));

    form.reset();
  }

}
