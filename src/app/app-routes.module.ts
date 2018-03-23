import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {CommentsListComponent} from "./posts/comments-list/comments-list.component";
import {PostsListComponent} from "./posts/posts-list/posts-list.component";
import {PostsEditComponent} from "./posts/posts-edit/posts-edit.component";
import {PostsAddComponent} from "./posts/posts-add/posts-add.component";

const router: Routes = [
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: 'posts', component: PostsListComponent, pathMatch: 'full'},
  {path: 'posts/new', component: PostsAddComponent},
  {path: 'posts/:id/comments', component: CommentsListComponent},
  {path: 'posts/:id/edit', component: PostsEditComponent}
];

@NgModule({
  imports:[
    RouterModule.forRoot(router)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
