import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVarService } from '../global-var.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

  constructor(private router: Router, public globalvar: GlobalVarService) { }

  fav = [];
  ngOnInit() {
    this.fav = this.globalvar.GetFavorite();
  }

  Akses(index){
    this.router.navigate(["/detail/" + index]);
  }
}
