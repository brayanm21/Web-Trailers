import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrailersService } from '../../../services/trailers.service';
import { Tmdb } from '../../interfaces/trailers.interface';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {

  id:string="";
  BusquedaPelicula: Tmdb[]=[];
  BusquedaSerie: Tmdb[]=[];


  constructor(private TrailersService:TrailersService,private activatedRoute: ActivatedRoute) {
    this.traerId();
   }

  traerId(){
    this.activatedRoute.params
    .subscribe( ({id}) => {
    this.id=id;
    this.obtenerBusquedaPelicula(id);
    this.obtenerBusquedaSerie(id);
  })
  }

  obtenerBusquedaPelicula(id: string): any {
    this.TrailersService.obtenerBusquedaPelicula(id).subscribe(
      (res: any) => {
        this.BusquedaPelicula = res;
        console.log("hola pruebas",this.BusquedaPelicula,id);
      }
    );   
  }

  obtenerBusquedaSerie(id: string): any {
    this.TrailersService.obtenerBusquedaSerie(id).subscribe(
      (res: any) => {
        this.BusquedaSerie = res;
      }
    );
  }
  
}
