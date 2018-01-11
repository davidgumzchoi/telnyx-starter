/// <reference path='../../declarations.d.ts'/>
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation.component';

import AboutComponent from './about';
import HomeComponent from './home';
import PostComponent from './posts-list/post';
import PostsListComponent from './posts-list';
import { CommentsListComponent } from './posts-list/comments/comments-list.component';
import { CommentComponent } from './posts-list/comments/comment/comment.component';
import { OrderByDatePipe } from './shared/order-by-date.pipe';

const routing = RouterModule.forRoot([
    {
        path: 'about',
        component: AboutComponent
    }, {
        path: 'home',
        component: HomeComponent
    }, {
        path: 'posts',
        component: PostsListComponent
    }, {
        path: 'posts/:postId',
        component: PostComponent
    }, {
        path: 'posts/:postId/comments',
        component: CommentsListComponent
    }, {
        path: 'comments/:commentId',
        component: CommentComponent
    }, {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    },
]);

@NgModule({
    imports: [
        BrowserModule,
        routing,
        HttpClientModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        NavigationComponent,
        AboutComponent,
        HomeComponent,
        PostsListComponent,
        PostComponent,
        CommentsListComponent,
        CommentComponent,
        OrderByDatePipe
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
