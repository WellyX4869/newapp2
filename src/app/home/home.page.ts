import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVarService } from '../global-var.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, public globalvar: GlobalVarService) { }

  judul: string = "";
  isi: string = "";
  tanggal: Date;
  validasi: string = "";

  notes = [];
  ngOnInit() {
    this.notes = this.globalvar.GetNotes();
  }

  Tambah() {
    if (!this.tanggal || this.judul == "" || this.isi == "") {
      this.validasi = "Ada hal yang belum terisi!";
    } else {
      this.validasi = "";
      let list = [this.judul, this.isi, this.tanggal];
      this.globalvar.AddNote(list);
    }
  }

  Akses(index) {
    this.router.navigate(["/detail/" + index]);
  }

  AksesFavorite() {
    this.router.navigate(["/favorite"]);
  }

}
