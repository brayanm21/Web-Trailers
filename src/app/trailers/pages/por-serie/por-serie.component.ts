import { Component, OnInit } from '@angular/core';
import { Tmdb } from '../../interfaces/trailers.interface';
import { TrailersService } from '../../../services/trailers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-por-serie',
  templateUrl: './por-serie.component.html',
  styleUrls: ['./por-serie.component.css']
})
export class PorSerieComponent implements OnInit {

  tendenciaTexto: Tmdb[]=[] ;
  tendenciaTrailer: Tmdb[]=[] ;
  topSerie: Tmdb[]=[] ;
  ids=1;

  constructor(private TrailersService:TrailersService,private activatedRoute: ActivatedRoute) {
    this.traerId();
    this.traerFunciones();
    this.obtenerPuntuadaSerie();
    
   }

  ngOnInit(): void {
  }
  traerFunciones(){
    this.obtenerTendenciaSerie(this.ids);
    this.obtenerSerieTrailer(this.ids);
    this.obtenerPuntuadaSerie();
  }

  traerId(){
    this.activatedRoute.params
    .subscribe( ({id}) => {
    this.ids=id;
    this.traerFunciones();
  })
  }

  obtenerTendenciaSerie(id:number): any {
    this.TrailersService.obtenerTendenciaTituloSerie(id).subscribe(
      (res: any) => {
        this.tendenciaTexto = res;
      }
    );
  }
  obtenerSerieTrailer(id:number): any {
    this.TrailersService.obtenerTendenciaTrailerSerie(id).subscribe(
      (res: any) => {
        this.tendenciaTrailer = res;
      }
    );
  }
  obtenerPuntuadaSerie(): any {
    this.TrailersService.obtenerMejorPuntuadaSerie().subscribe(
      (res: any) => {
        this.topSerie = res;
      }
    );
  }

}
