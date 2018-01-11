import { Injectable } from '@angular/core';

import { HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SharedService {
    public readonly ROOT_URL: string = 'http://localhost:9001';
}

@Injectable()
export class EndPoint {
    public requestOptions(): any {
        let params = new HttpParams().set('userId', '1');
        let headers = new HttpHeaders().set('Authorization', 'auth-token');

        return { params, headers };
    }
}