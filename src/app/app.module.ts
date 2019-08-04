import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostSingleComponent } from './post-single/post-single.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { SiteNavComponent } from './site-nav/site-nav.component';
import { PagesListComponent } from './pages-list/pages-list.component';
import { PageSingleComponent } from './page-single/page-single.component';
import { CategorySingleComponent } from './category-single/category-single.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { SiteIndexComponent } from './site-index/site-index.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostSingleComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    SiteNavComponent,
    PagesListComponent,
    PageSingleComponent,
    CategorySingleComponent,
    CategoriesListComponent,
    SiteIndexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    HttpClientJsonpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
