import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { PostListComponent } from './components/posts/post-list.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  // {path: 'list', component: PostListComponent},
  {path: 'post', component: PostComponent},
  {path: 'users', component: ListUsersComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
