import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-grid-list-switch',
  templateUrl: './grid-list-switch.component.html',
  styleUrls: ['./grid-list-switch.component.scss']
})
export class GridListSwitchComponent {
  @Input()
  isGrid: boolean = true;
  @Output()
  isGridUpdate: EventEmitter<boolean> = new EventEmitter();

  onIsGridUpdate(isGrid: boolean) {
    this.isGridUpdate.emit(isGrid);
  }
}
