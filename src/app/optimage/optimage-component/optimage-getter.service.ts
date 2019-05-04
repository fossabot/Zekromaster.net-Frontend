import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OptimageGetterService {
  private apiUrl: string = 'api/images/'

  constructor(
    private http: HttpClient
  ) { }

  getImage(id: string): Observable<string> {
    return this.http.get(this.apiUrl + id, {responseType: "text"}).pipe(
      catchError((e)=>{
        console.log(e)
        return of("");
      })
    );
  }

  getImageList(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl).pipe(
      catchError(()=>of([]))
    );

  }
}
