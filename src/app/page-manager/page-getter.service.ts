import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

type pageData = {locales?: {[name: string]: any}, [name: string]: any};

export interface Page {
  _id: string;
  type: string;
  title: string;
  description: string;
  data: pageData;
}

@Injectable({
  providedIn: 'root'
})
export class PageGetterService {
  private apiUrl: string = 'api/pages/'

  constructor(
    private http: HttpClient
  ) { }

  getPage(id: string): Observable<Page> {
    return this.http.get<Page>(this.apiUrl + id).pipe(
      catchError((e)=>{
        console.log(e)
        return of({_id: "404", type: "404", title: "", description: "", data: {}});
      })
    );
  }

  getPages(): Observable<Page[]> {
    return this.http.get<Page[]>(this.apiUrl).pipe(
      catchError(()=>of([]))
    );

  }
}
