import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GridListService {
  private isGrid = true;

  constructor() { }

  setIsGrid(isGrid: boolean) {
    this.isGrid = isGrid;
  }
  getIsGrid() {
    return this.isGrid;
  }

}
