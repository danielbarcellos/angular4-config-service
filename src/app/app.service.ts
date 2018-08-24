import { Injectable } from '@angular/core';
import { Config } from './Config';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ConfigService {
    private _Url = '';

    constructor(private _http: Http) { }
    
    getConfig(cep: string): Observable<Config> {
        return this._http.get(this._Url)
            .map((response: Response) => <Config>response.json())
            .do(data => console.log('data: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'erro no servidor');
    }
}