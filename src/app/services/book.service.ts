import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  headers = new HttpHeaders({
		'Content-Type': 'application/json',
		Authorization: 'Token fe408f724fc5d77a79755ae57cc0da7b8302cbc7'
    });
    
  APIurl = 'http://localhost:8000/api/'

  bookurl = `${this.APIurl}books/`;

  constructor(private httpClient:HttpClient) { }

  getAllBooks(){
    return this.httpClient.get(this.bookurl,{headers:this.headers});

  }

}
