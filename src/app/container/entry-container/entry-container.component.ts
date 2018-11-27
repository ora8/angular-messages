import { Component, OnInit } from '@angular/core';
import { EntryService } from '../../services/entry.service';
import { Entry } from '../../domain/entry';

@Component({
  selector: 'app-entry-container',
  templateUrl: './entry-container.component.html',
  styleUrls: ['./entry-container.component.css']
})
export class EntryContainerComponent implements OnInit {
  isLoading: boolean;
  entries: Entry[];

  public constructor(private entryService: EntryService) {
    this.isLoading = true;
  }

  public ngOnInit() {
    this.entryService.indexEntries().subscribe((entries: Entry[]) => {
      this.entries = entries;
      this.isLoading = false;
    });
  }

}
