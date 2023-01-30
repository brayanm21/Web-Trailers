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

  constructor(private TrailersService:TrailersService,private activatedRoute: ActivatedRoute) { 
    this.traerId();
    
  }

  traerId(){
    this.activatedRoute.params
    .subscribe( ({id}) => {
    console.log("treaer id",id);
    this.id=id;
    this.obtenerPeliculaPorID(id);
    this.obtenerTrailer(id);
  })
  }

  obtenerPeliculaPorID(id:string){
    this.TrailersService.obtenerDatosIdPelicula(id).subscribe(
      (res: any) => {
        this.peliculaPorID = res;
      }
    );
  }
  obtenerTrailer(id:string): any {
    console.log("hola");
    this.TrailersService.obtenerTrailerYoutube(id).subscribe(
      (res: any) => {
        this.trailerYoutube = res.results[0].key;
        console.log("aca",this.trailerYoutube);
      }
    );
  }
}
