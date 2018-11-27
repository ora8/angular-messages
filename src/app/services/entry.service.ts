import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entry } from '../domain/entry';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  constructor(private httpClient: HttpClient) { }

  public indexEntries() {
    return this.httpClient.get<Entry[]>(environment.apiBase + '/entry');
  }
}
