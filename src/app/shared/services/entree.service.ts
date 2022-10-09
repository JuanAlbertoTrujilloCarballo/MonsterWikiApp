import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entree } from '../interfaces/entree';


@Injectable({
  providedIn: 'root'
})
export class EntreeService {

  constructor(private httpClient: HttpClient) { }
  public retrieveEntry(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/monsters');
    }
}