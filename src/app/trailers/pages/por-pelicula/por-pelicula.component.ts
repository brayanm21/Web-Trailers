import { Component } from '@angular/core';
import { Tmdb } from '../../interfaces/trailers.interface';
import { TrailersService } from '../../../services/trailers.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-por-pelicula',
  templateUrl: './por-pelicula.component.html',
  styleUrls: ['./por-pelicula.component.css']
})
export class PorPeliculaComponent {

  tendenciaTexto: Tmdb[]=[];
  tendenciaTrailer: Tmdb[]=[];
  topPelicula: Tmdb[]=[];
  ids=1;
  

  constructor(private TrailersService:TrailersService,private activatedRoute: ActivatedRoute) {
    this.traerId();
    this.traerFunciones();
    //this.buscar();
   }
  traerFunciones(){
    this.obtenerTendenciaPelicula(this.ids);
    this.obtenerPeliculaTrailer(this.ids);
    this.obtenerPuntuadaPelicula();
  }
   
  traerId(){
    this.activatedRoute.params
    .subscribe( ({id}) => {
    this.ids=id;
    this.traerFunciones();
  })
  }

  obtenerTendenciaPelicula(id: number): any {
    this.TrailersService.obtenerTendenciaTituloPelicula(id).subscribe(
      (res: any) => {
        this.tendenciaTexto = res;
      }
    );
  }
  obtenerPeliculaTrailer(id: number): any {
    this.TrailersService.obtenerTendenciaTrailerPelicula(id).subscribe(
      (res: any) => {
        this.tendenciaTrailer = res;
      }
    );
  }
  obtenerPuntuadaPelicula(): any {
    this.TrailersService.obtenerMejorPuntuadaPelicula().subscribe(
      (res: any) => {
        this.topPelicula = res;
      }
    );
  }
}
