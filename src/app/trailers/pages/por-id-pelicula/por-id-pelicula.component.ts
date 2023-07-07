import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrailersService } from '../../../services/trailers.service';
import { Tmdb } from '../../interfaces/trailers.interface';

@Component({
  selector: 'app-por-id-pelicula',
  templateUrl: './por-id-pelicula.component.html',
  styleUrls: ['./por-id-pelicula.component.css']
})
export class PorIdPeliculaComponent {

  peliculaPorID: Tmdb[]=[];
  id:string="";
  trailerYoutube:string="1";
  lasts:Number=0;

  constructor(private TrailersService:TrailersService,private activatedRoute: ActivatedRoute) { 
    this.traerId();
    
  }

  traerId(){
    this.activatedRoute.params
    .subscribe( ({id}) => {
    this.id=id;
    this.obtenerPeliculaPorID(id);
    this.obtenerTrailer(id);
  })
  }

  obtenerPeliculaPorID(id:string){
    this.TrailersService.obtenerDatosIdPelicula(id).subscribe(
      (res: any) => {
        this.peliculaPorID = res;
        console.log(this.peliculaPorID);
      }
    );
  }
  obtenerTrailer(id:string): any {
    this.TrailersService.obtenerTrailerYoutube(id).subscribe(
      (res: any) => {
        const [last] = res.results.slice(-2);
        this.trailerYoutube = last.key;
      }
    );
  }
}
