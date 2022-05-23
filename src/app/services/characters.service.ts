import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private baseUrl: string = 'https://breakingbadapi.com/api/characters/';
  constructor(private httpClient: HttpClient) { }

  /*  getAll(): Promise<Character[]> {
     return lastValueFrom(this.httpClient.get<Character[]>(this.baseUrl))
   } */

  getAll(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.baseUrl)
  }

  getById(id: number): Promise<Character[]> {
    return lastValueFrom(this.httpClient.get<Character[]>(this.baseUrl + id))
  }

  getByName(name: string): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.baseUrl + '?name=' + name)
  }
}
