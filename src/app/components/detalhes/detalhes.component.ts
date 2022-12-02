import { Component, OnInit } from '@angular/core';
import { GamesService} from "../../services/games.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit {
  jogo:any;

  constructor( private _sg:GamesService, private _router:ActivatedRoute) {
    this._router.params.subscribe((resp: any)=>{
      this._sg.detalhesJogo(resp.id).subscribe((resp:any)=>{
        console.log(resp);
        this.jogo=resp;
      });
    });
   }

  ngOnInit() {}

}
