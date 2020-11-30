import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    public url: string;
    public headers;

    public baseURL: string = environment.server;

    constructor(
        public http: HttpClient
    ) {
        this.url = this.baseURL;

        this.headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', this.getToken());
    }

    get(url: string): Observable<any> {
        return this.http.get(this.url + url, this.headers);
    }

    post(url: string, data): Observable<any> {
        const json = JSON.stringify(data);

        this.headers.set('Authorization', this.getToken());
        
        return this.http.post(this.url + url, json, { headers: this.headers, observe: 'response' });
    }

    put(url: string, data): Observable<any> {
        const json = JSON.stringify(data);

        this.headers.set('Authorization', this.getToken());

        return this.http.put(this.url + url, json, { headers: this.headers, observe: 'response' });
    }

    delete(url): Observable<any> {
        return this.http.delete(this.url + url, { headers: this.headers, observe: 'response' });
    }

    getToken(){
        return localStorage.getItem('token');
    }

    getCoinbase(url: string): Observable<any> {
        return this.http.get(url, this.headers);
    }
}
