import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin } from 'rxjs/observable/forkJoin'; // Damn !
import { Observable } from 'rxjs/Observable';
import { resolve } from 'url';


@Injectable()
export class Config {

    private _headerJSON: HttpHeaders = new HttpHeaders()
        .set('Content-Type', 'application/json; charset=utf8');

    private starwarsRatingConfig = 'assets/starwarsRating.json';

    private _starwarsRating: any;

    constructor(private http: HttpClient) {}

    load() {
        forkJoin(this.getConfig()).subscribe( (data) => {
            if (data && data.length >= 1) {
                this._starwarsRating = data[0];
            }
        });
    }

    private getConfig() {
        return [
            this.getStarwarsRating()
        ];
    }

    private getStarwarsRating(): Observable<any> {
        return this.http.get(this.starwarsRatingConfig);
    }

    get starwarsRating(): any {
        return this._starwarsRating;
    }
}
