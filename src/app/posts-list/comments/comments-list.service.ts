import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SharedService, EndPoint } from './../../shared/shared.service';

@Injectable()
export class CommentsListService {
    public constructor(private _http: HttpClient,
        private _sharedService: SharedService,
        private _endPoint: EndPoint) {
    }

    getComments(postId: number): Observable<any> {
        return this._http.get(`${this._sharedService.ROOT_URL}/comments?postId=${postId}`, this._endPoint.requestOptions());
    }

    postComment(postId: number, comment: any): Observable<any> {
        return this._http.post(`${this._sharedService.ROOT_URL}/comments?postId=${postId}`, comment, this._endPoint.requestOptions());
    }
}
