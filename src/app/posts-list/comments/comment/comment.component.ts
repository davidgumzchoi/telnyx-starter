/**
 * @overview Post page.  Renders static content.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { CommentService } from './comment.service';
import { SharedService, EndPoint } from './../../../shared/shared.service';

import template from './comment.html';

@Component({
    selector: 'comment',
    template,
    providers: [ CommentService, SharedService, EndPoint ]
})

export class CommentComponent implements OnInit {
    commentId: string;
    comment: Observable<Comment>;
    isLoaded: boolean;
    
    constructor(private _activatedRoute: ActivatedRoute,
        private _commentService: CommentService) {
            this.commentId = _activatedRoute.snapshot.params.commentId;
    }

    ngOnInit(): void {
        this.getComment(this.commentId);
    }

    getComment(commentId: string): Subscription {
        this.isLoaded = false;
        return this._commentService.getComment(commentId).subscribe(
            data => {
                this.comment = data;
                this.isLoaded = true;
            }
        );
    }
}
