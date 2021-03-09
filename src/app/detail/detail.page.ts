import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalVarService } from '../global-var.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public globalvar: GlobalVarService
  ) { }

  index = 0;
  note = [];

  ngOnInit() {
    this.index = parseInt(this.route.snapshot.paramMap.get("index"));
    this.note = this.globalvar.GetNote(this.index);
  }

  Favorite() {
    this.globalvar.AddFavorite(this.index);
  }
}
