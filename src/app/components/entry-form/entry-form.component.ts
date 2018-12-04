import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { EntryService } from '../../services/entry.service';

import { Entry } from '../../domain/entry';

import { HttpErrorResponse } from '@angular/common/http';

import { ThrowStmt } from '@angular/compiler';
import { getLocaleDateTimeFormat } from '@angular/common';


@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

  entry: Entry;

  constructor(private entryService: EntryService) {
    this.entry = {
      id: 1,
      title: '',
      email: '',
      message: '',
      createdAt: ''
    };
  }

  ngOnInit() {
  }

  onSubmit(e: Event) {
    this.entryService.addEntry(this.entry).subscribe();
    }
}
