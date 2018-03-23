import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";

import { Post } from "../../post.module";
import {PostService} from "../../../posts.service";

@Component({
  selector: 'app-posts-item',
  templateUrl: './posts-item.component.html',
  styleUrls: ['./posts-item.component.scss']
})
export class PostsItemComponent implements OnInit {
  @Input() posts: Post;
  @Input() index: number;

  constructor( private postService: PostService, private route: Router) { }

  ngOnInit() {
  }

  deletePost(){
    this.postService.deletePost(this.posts);
  }

  edit(){
    this.route.navigate(['/posts/' + this.index + '/edit']);
  }

}
