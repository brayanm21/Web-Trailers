import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorPeliculaComponent } from './pages/por-pelicula/por-pelicula.component';
import { PorSerieComponent } from './pages/por-serie/por-serie.component';
import { SugerenciaTituloComponent } from './components/sugerencia-titulo/sugerencia-titulo.component';
import { SugerenciaTrailerComponent } from './components/sugerencia-trailer/sugerencia-trailer.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopTrailerComponent } from './components/top-trailer/top-trailer.component';
import { PorIdPeliculaComponent } from './pages/por-id-pelicula/por-id-pelicula.component';
import { PorIdSerieComponent } from './pages/por-id-serie/por-id-serie.component';
import { PaginadorComponent } from './components/paginador/paginador.component';



@NgModule({
  declarations: [
    PorPeliculaComponent,
    PorSerieComponent,
    SugerenciaTituloComponent,
    SugerenciaTrailerComponent,
    TopTrailerComponent,
    PorIdPeliculaComponent,
    PorIdSerieComponent,
    PaginadorComponent
  ],
  exports:[
    PorPeliculaComponent,
    PorSerieComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule
  ]
})
export class TrailersModule { }
