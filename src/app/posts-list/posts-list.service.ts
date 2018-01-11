import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SharedService, EndPoint } from './../shared/shared.service';

@Injectable()
export class PostsListService {
    public constructor(private _http: HttpClient,
        private _sharedService: SharedService,
        private _endPoint: EndPoint) {
    }

    getPosts(): Observable<any> {
        return this._http.get(`${this._sharedService.ROOT_URL}/posts`, this._endPoint.requestOptions());
    }
}
