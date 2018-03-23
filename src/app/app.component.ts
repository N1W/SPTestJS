import {Component, OnInit} from '@angular/core';
import {Response} from "@angular/http";

import {PostService} from "./posts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor (private postService: PostService) {}

  ngOnInit() {
    this.postService.setPosts();
  }
}
