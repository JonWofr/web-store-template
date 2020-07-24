import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Fetch one document via a GET request
   * @param url the url of the GET request
   * @returns the observable which will serve the requested document
   */
  getOneAsObservable<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url);
  }

  /**
   * Fetch one document via a GET request
   * @param url the url of the GET request
   * @returns the promise which once fullfilled will serve the requested document
   */
  getOneAsPromise<T>(url: string): Promise<T> {
    return this.httpClient.get<T>(url).toPromise();
  }

  /**
   * Fetch an array of documents via a GET request
   * @param url the url of the GET request
   * @returns the observable which will serve the array of requested documents
   */
  getManyAsObservable<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url);
  }

  /**
   * Fetch an array of documents via a GET request
   * @param url the url of the GET request
   * @returns the promise which once fullfilled will serve the array of requested documents
   */
  getManyAsPromise<T>(url: string): Promise<T> {
    return this.httpClient.get<T>(url).toPromise();
  }
}
