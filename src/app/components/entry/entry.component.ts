import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Input() entryid: number;
  @Input() title: string;
  @Input() email: string;
  @Input() message: string;
  @Input() createdAt: string;

  constructor() { }

  ngOnInit() {
  }

}
