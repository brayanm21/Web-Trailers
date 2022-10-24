import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Tmdb } from '../trailers/interfaces/trailers.interface';

@Injectable({
  providedIn: 'root'
})
export class TrailersService {

  private height = screen.height;
  private width = screen.width;
  private api = 'api_key=1ba88101867d3573366b2e4475e024c3';
  private language = '&language=es';
  public pages = 1;
  private urlPage = "&page=";
  private languageEn = '&language=en';
  private urlMovieDb = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient ) { }


  getConexionEspañol(search: string, many: boolean = true): any {
    let url;
    url = `${this.urlMovieDb}${search}?${this.api}${this.language}${this.urlPage}${this.pages}`;
    return this.http.get(url);
  }

  obtenerTendenciaTituloPelicula(id: number): any {
    this.pages= id;
    console.log("id: ", id, "pages: ", this.pages)
    return this.getConexionEspañol(`/trending/movie/day`).pipe(
      map( (res: any) => res.results.slice(0,4))
    );
  }
  obtenerTendenciaTituloSerie(id: number): any {
    this.pages= id;
    return this.getConexionEspañol(`/trending/tv/day`).pipe(
      map( (res: any) => res.results.slice(0,4))
    );
  }
  obtenerTendenciaTrailerPelicula(id: number): any {
    this.pages= id;
    return this.getConexionEspañol(`/trending/movie/day`).pipe(
      map( (res: any) => res.results.slice(0,20))
    );
  }
  obtenerTendenciaTrailerSerie(id: number): any {
    this.pages= id;
    return this.getConexionEspañol(`/trending/tv/day`).pipe(
      map( (res: any) => res.results.slice(0,20))
    );
  }
  obtenerMejorPuntuadaPelicula(): any {
    return this.getConexionEspañol(`/movie/top_rated`).pipe(
      map( (res: any) => res.results.slice(0,9))
    );
  }
  obtenerMejorPuntuadaSerie(): any {
    return this.getConexionEspañol(`/tv/top_rated`).pipe(
      map( (res: any) => res.results.slice(0,9))
    );
  }
  obtenerDatosIdPelicula(id:string): any {
    return this.getConexionEspañol(`/movie/${id}`).pipe(
      map( (res: any) => res.results[0])
    );
  }
  obtenerDatosIdSerie(id:string): any {
    return this.getConexionEspañol(`/tv/${id}`).pipe(
      map( (res: any) => res.results[0])
    );
  }
}