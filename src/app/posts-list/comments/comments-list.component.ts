/**
 * @overview CommentsList page.  Renders static content.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { PostService } from './../post/post.service';
import { CommentsListService } from './comments-list.service';
import { SharedService, EndPoint } from './../../shared/shared.service';
import { OrderByDatePipe } from './../../shared/order-by-date.pipe';

import template from './comments-list.html';

@Component({
    selector: 'comments-list',
    template,
    providers: [ PostService, CommentsListService, SharedService, EndPoint ]
})

export class CommentsListComponent implements OnInit {
    postId: any;
    comments: Observable<Comment[]>;
    name: FormControl;
    content: FormControl;
    commentForm: FormGroup;

    constructor(private _commentsListService: CommentsListService,
                private _activatedRoute: ActivatedRoute,
                private _formBuilder: FormBuilder) {
        this.postId = _activatedRoute.snapshot.params.postId;
        this.comments = new Observable<Comment[]>();
        this.name = new FormControl('', [
            Validators.required,
            Validators.minLength(5)
        ]);
        this.content = new FormControl('', [
            Validators.required,
            Validators.minLength(10)
        ]);
        this.commentForm = this._formBuilder.group({
            postId: null,
            parentId: null, // Parent comment for replies, is `null` if top-level comment
            user: this.name,
            date: '',
            content: this.content
        });
    }

    ngOnInit(): void {
        this.getComments(this.postId);
    }

    getComments(postId: number): Subscription {
        return this._commentsListService.getComments(postId).subscribe(
            data => this.comments = data
        );
    }

    addComment(): Subscription {
        this.commentForm.value.postId = this.postId;
        this.commentForm.value.parentId = null;
        this.commentForm.value.date = this.getDate();
        return this._commentsListService.postComment(this.postId, this.commentForm.value).subscribe(
            data => this.comments = data
        );
    }

    getDate(): string {
        let today = new Date();
        return today.toISOString().substring(0, 10);
    }
}
