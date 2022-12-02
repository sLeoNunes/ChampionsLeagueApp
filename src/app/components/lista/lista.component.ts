import { Component, OnInit } from '@angular/core';
import { GamesService } from "../../services/games.service";


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
jogos: any [ ] = [ ];
  constructor(private _sg:GamesService) { }

  ngOnInit() {
    this._sg.obterJogos().subscribe((resp: any) =>{
      console.log(resp.results); 
      this.jogos=resp.results;
    });
  }

}
