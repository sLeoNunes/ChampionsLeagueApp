import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  games : string = "https://api.rawg.io/api/games?page_size=8";
  jogo : string = "https://api.rawg.io/api/games/{id}";
  constructor(private _sg:HttpClient ) { }

obterJogos(){
  let url = this.games;
  return this._sg.get(url);
}

detalhesJogo(nome:string){
  let url = `${this.jogo}/${nome}`;
  return this._sg.get(url);

}
}