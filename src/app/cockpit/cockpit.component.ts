import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServerData } from '../types';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<ServerData>();
  @Output() blueprintCreated = new EventEmitter<ServerData>();
  newServerName = '';
  newServerContent = '';

  constructor() {}

  ngOnInit(): void {}

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });

    this.newServerName = '';
    this.newServerContent = '';
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });

    this.newServerName = '';
    this.newServerContent = '';
  }
}
