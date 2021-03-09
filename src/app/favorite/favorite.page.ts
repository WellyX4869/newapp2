import { Component, OnInit } from '@angular/core';
import { GlobalVarService } from '../global-var.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

  constructor(public globalvar: GlobalVarService) { }

  fav = [];
  ngOnInit() {
    this.fav = this.globalvar.GetFavorite();
  }

}
