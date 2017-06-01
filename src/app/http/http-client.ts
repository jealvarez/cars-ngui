import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class HttpClient {

  constructor(private _http: Http) {
  }

  public post(url: string, body: any, requestOptions?: RequestOptions): Observable<Response> {
    return this._http.post(url, JSON.stringify(body), this._getRequestOptions(requestOptions));
  }

  public get(url: string, requestOptions?: RequestOptions): Observable<Response> {
    return this._http.get(url, this._getRequestOptions(requestOptions));
  }

  public put(url: string, body: any, requestOptions?: RequestOptions): Observable<Response> {
    return this._http.put(url, JSON.stringify(body), this._getRequestOptions(requestOptions));
  }

  public patch(url: string, body: any, requestOptions?: RequestOptions): Observable<Response> {
    return this._http.patch(url, JSON.stringify(body), this._getRequestOptions(requestOptions));
  }

  public delete(url: string, requestOptions?: RequestOptions): Observable<Response> {
    return this._http.delete(url, this._getRequestOptions(requestOptions));
  }

  private _getRequestOptions(requestOptions: RequestOptions): RequestOptions {
    let requestOption = (requestOptions) ? requestOptions : new RequestOptions(requestOptions);
    requestOption.headers = this._getHeaders(requestOption);
    return requestOption;
  }

  private _getHeaders(requestOptions: RequestOptions): Headers {
    let headers = new Headers(requestOptions.headers);
    headers.append('Content-Type', 'application/json');
    return headers;
  }

}