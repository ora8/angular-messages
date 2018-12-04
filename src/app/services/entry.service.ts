import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
import { Entry } from '../domain/entry';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  constructor(private httpClient: HttpClient) {
  }

  public indexEntries() {
    return this.httpClient.get<Entry[]>(environment.apiBase + '/entry');
  }

  public addEntry(entry: Entry): Observable<Entry> {
     return this.httpClient.post<Entry>(environment.apiBase + '/entry',  entry);
  }
}
