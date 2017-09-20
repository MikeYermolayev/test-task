import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Api } from '../constants';

@Injectable()
export class ApiService {
  constructor(
    private http: Http
  ) {}

  private setHeaders(): Headers {
    let headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    return new Headers(headersConfig);
  }

  post(path: string, body: Object = {}): Promise<any> { 
    return this.http.post(`${Api.HOST}${path}`, JSON.stringify(body), { headers: this.setHeaders() })
                    .toPromise()
                    .then(res => res.json());
  }

  get(path: string): Promise<any> { 
    return this.http.get(`${Api.HOST}${path}`, { headers: this.setHeaders() })
                    .toPromise()
                    .then(res => res.json());
  }
}