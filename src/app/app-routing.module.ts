import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PorIdPeliculaComponent } from './trailers/pages/por-id-pelicula/por-id-pelicula.component';
import { PorIdSerieComponent } from './trailers/pages/por-id-serie/por-id-serie.component';
import { PorPeliculaComponent } from './trailers/pages/por-pelicula/por-pelicula.component';
import { PorSerieComponent } from './trailers/pages/por-serie/por-serie.component';
import { BuscarComponent } from './trailers/pages/buscar/buscar.component';




const routes: Routes = [
  {
    path: "",
    component: PorPeliculaComponent,
    pathMatch: "full"
  },
  {
    path: "pelicula/pagina/:id",
    component: PorPeliculaComponent,
  },
  {
    path: "pelicula/:id",
    component: PorIdPeliculaComponent,
  },
  {
    path: "serie/pagina/:id",
    component: PorSerieComponent,
  },
  {
    path: "serie/:id",
    component: PorIdSerieComponent,
  },
  {
    path: "buscar/:id",
    component: BuscarComponent,
  },
  

];

@NgModule({
  imports:[
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule {
}
