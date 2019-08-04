import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostSingleComponent } from './post-single/post-single.component';
import { PagesListComponent } from './pages-list/pages-list.component';
import { PageSingleComponent } from './page-single/page-single.component';
import { CategorySingleComponent } from './category-single/category-single.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { SiteIndexComponent } from './site-index/site-index.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'posts', component: PostsListComponent },
  { path: 'posts/:author', component: PostsListComponent },
  { path: 'post/:id', component: PostSingleComponent }, 
  { path: 'pages', component: PagesListComponent },
  { path: 'page/:id', component: PageSingleComponent }, 
  { path: 'categories', component: CategoriesListComponent },
  { path: 'category/:dataset', component: CategorySingleComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
