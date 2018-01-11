/**
 * @overview PostsList page.  Renders static content.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { PostsListService } from './posts-list.service';
import { SharedService, EndPoint } from './../shared/shared.service';
import { OrderByDatePipe } from './../shared/order-by-date.pipe';

import template from './posts-list.html';

@Component({
    selector: 'posts-list',
    template,
    providers: [ PostsListService, SharedService, EndPoint ]
})

export class PostsListComponent implements OnInit {
    posts: Observable<Post[]>

    constructor(private _postsListService: PostsListService) {
    }

    ngOnInit(): void {
        this.getPosts();
    }

    getPosts(): Subscription {
        return this._postsListService.getPosts().subscribe(
            data => this.posts = data
        );
    }
}
