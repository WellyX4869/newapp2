import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVarService {

  public list = [];
  public fav = [];
  constructor() { }

  public AddNote(otherList) {
    this.list.push(otherList);
  }

  public GetNotes() {
    return this.list;
  }

  public GetNote(index) {
    return this.list[index];
  }

  public AddFavorite(index) {
    var match = 0;
    for (let i = 0; i < this.fav.length; i++) {
      if (index == this.fav[i]) {
        match = 1;
        break;
      }
    }
    if (match == 0) {
      this.fav.push(index);
    }
  }

  public GetFavorite() {
    var favList = [];
    for (let i = 0; i < this.fav.length; i++) {
      favList.push(this.list[this.fav[i]]);
    }
    return favList;
  }

  public GetFavLength() {
    return this.fav.length;
  }
}
