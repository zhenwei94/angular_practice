import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  APIurl = 'http://localhost:8000/api'

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Token fe408f724fc5d77a79755ae57cc0da7b8302cbc7'
  });

  constructor(
    private http: HttpClient,
  ) { }

  getAllAuthors(){
    
    return this.http.get(
      `${this.APIurl}/books/`, {headers: this.headers}
    )
  }

}
