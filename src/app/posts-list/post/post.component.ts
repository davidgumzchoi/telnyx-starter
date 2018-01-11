/**
 * @overview Post page.  Renders static content.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { PostService } from './post.service';
import { SharedService, EndPoint } from './../../shared/shared.service';

import template from './post.html';

@Component({
    selector: 'post',
    template,
    providers: [ PostService, SharedService, EndPoint ]
})

export class PostComponent implements OnInit {
    postId: string;
    post: Observable<Post>;
    isLoaded: boolean;
    
    constructor(private _activatedRoute: ActivatedRoute,
        private _postService: PostService) {
            this.postId = _activatedRoute.snapshot.params.postId;
    }

    ngOnInit(): void {
        this.getPost(this.postId);
    }

    getPost(postId: string): Subscription {
        this.isLoaded = false;
        return this._postService.getPost(postId).subscribe(
            data => {
                this.post = data;
                this.isLoaded = true;
            }
        );
    }
}
