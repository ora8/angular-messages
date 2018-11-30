import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { EntryService } from '../../services/entry.service';

import { Entry } from '../../domain/entry';

import { HttpErrorResponse } from '@angular/common/http';

import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

  entry: Entry;

  constructor(private entryService: EntryService) {
    this.entry = new Entry();
  }

  ngOnInit() {
  }

  onSubmit(e: Event) {
    this.entryService.addEntry(this.entry).subscribe(
      (err: HttpErrorResponse) => {
        if (err !== null) {
          if (err.error instanceof Error) {
            // A client-side or network error occurred.
            console.log('An error occurred:', err.error.message);
          } else {
            // Backend returns unsuccessful response codes such as 404, 500 etc.
            console.log('Backend returned status code: ', err.status);
            console.log('Response body:', err.error);
          }
        } else {
          // no error
          console.log('err is null');
        }
      }
    );
  }
}
