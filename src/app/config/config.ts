import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin } from 'rxjs/observable/forkJoin'; // Damn !
import { Observable } from 'rxjs/Observable';
import { resolve } from 'url';


@Injectable()
export class Config {

    private _headerJSON: HttpHeaders = new HttpHeaders()
        .set('Content-Type', 'application/json; charset=utf8');

    private _starwarsRatingConfig = 'assets/starwarsRating.json';
    private _existingCanvassesConfig = 'assets/existingCanvassesConfig.json';

    private _starwarsRating: any;
    private _existingCanvasses;

    constructor(private http: HttpClient) {}

    load() {
        forkJoin(this.getConfig()).subscribe( (data) => {
            if (data && data.length >= 1) {
                this._starwarsRating = data[0];
            }
            if (data && data.length >= 2) {
                this._existingCanvasses = data[1];
            }
        });
    }

    private getConfig() {
        return [
            this.getStarwarsRating(),
            this.getExistingCanvasses()
        ];
    }

    private getStarwarsRating(): Observable<any> {
        return this.http.get(this._starwarsRatingConfig);
    }

    get starwarsRating(): any {
        return this._starwarsRating;
    }

    private getExistingCanvasses(): Observable<any> {
        return this.http.get(this._existingCanvassesConfig);
    }

    get existingCanvasses(): any {
        return this._existingCanvasses;
    }
}
