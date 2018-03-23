import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";


import { AppComponent } from './app.component';
import { PostService } from './posts.service';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PostsItemComponent } from './posts/posts-list/posts-item/posts-item.component';
import { CommentsListComponent } from './posts/comments-list/comments-list.component';
import { CommentItemComponent } from './posts/comments-list/comment-item/comment-item.component';
import {AppRoutingModule} from "./app-routes.module";
import { PostsAddComponent } from './posts/posts-add/posts-add.component';
import { PostsEditComponent } from './posts/posts-edit/posts-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    PostsListComponent,
    PostsItemComponent,
    CommentsListComponent,
    CommentItemComponent,
    PostsAddComponent,
    PostsEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
