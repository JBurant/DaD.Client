import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServerResponseModel } from './models/server-response.model';

@Injectable()
export class BackendService {
  public result: ServerResponseModel;

  constructor(private http: HttpClient) { }

get(url: string): Observable<ServerResponseModel>
{
  return this.http.get<ServerResponseModel>(url , { observe: 'response' }).pipe(
    map(response => response.body)
    );
}

post <T> (url: string, payload: T)
{
  return this.http.post<ServerResponseModel>(url, payload, { observe: 'response' });
}

deleteArticle(url: string)
{
  return this.http.delete<ServerResponseModel>(url, { observe: 'response' });
}
}