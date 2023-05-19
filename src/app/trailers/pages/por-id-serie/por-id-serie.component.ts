import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrailersService } from '../../../services/trailers.service';
import { Tmdb } from '../../interfaces/trailers.interface';

@Component({
  selector: 'app-por-id-serie',
  templateUrl: './por-id-serie.component.html',
  styleUrls: ['./por-id-serie.component.css']
})
export class PorIdSerieComponent{

  seriePorID: Tmdb[]=[];
  id:string="";
  trailerYoutube:string="1";

  constructor(private TrailersService:TrailersService,private activatedRoute: ActivatedRoute) {
    this.traerId();
  }

  traerId(){
    this.activatedRoute.params
    .subscribe( ({id}) => {
    this.id=id;
    this.obtenerSeriePorID(id);
    this.obtenerTrailer(id);
  })
  }

  obtenerSeriePorID(id:string){
    this.TrailersService.obtenerDatosIdSerie(id).subscribe(
      (res: any) => {
        this.seriePorID = res;
        console.log(res);
      }
    );
  }
  obtenerTrailer(id:string): any {
    this.TrailersService.obtenerTrailerYoutubeSerie(id).subscribe(
      (res: any) => {
        const [last] = res.results.slice(-1);
        this.trailerYoutube = last.key;
      }
    );
  }
}
