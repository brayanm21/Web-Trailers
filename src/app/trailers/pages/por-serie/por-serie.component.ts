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
    console.log("treaer id",id);
    this.ids=id;
    console.log("treaer id",this.ids);
    this.traerFunciones();
  })
  }

  obtenerTendenciaSerie(id:number): any {
    this.TrailersService.obtenerTendenciaTituloSerie(id).subscribe(
      (res: any) => {
        this.tendenciaTexto = res;
        console.log("xdxdddxdxd",res , "La resolución de tu pantalla es: width" + screen.width + " x  heigth" + screen.height);
      }
    );
  }
  obtenerSerieTrailer(id:number): any {
    this.TrailersService.obtenerTendenciaTrailerSerie(id).subscribe(
      (res: any) => {
        this.tendenciaTrailer = res;
        console.log("xdxdddxdxd",res , "La resolución de tu pantalla es: width" + screen.width + " x  heigth" + screen.height);
      }
    );
  }
  obtenerPuntuadaSerie(): any {
    this.TrailersService.obtenerMejorPuntuadaSerie().subscribe(
      (res: any) => {
        this.topSerie = res;
        console.log(this.topSerie);
      }
    );
  }

}
