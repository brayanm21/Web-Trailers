import { Component, OnInit } from '@angular/core';
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
	selector: 'ngbd-offcanvas-firstfocus',
	template: `

  <div class="offcanvas offcanvas-start show" style="background-color: black;">
		<div class="offcanvas-header">
			<a href="/pelicula/pagina/1" class="d-flex align-items-center  text-white text-decoration-none">
				<img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/40/000000/external-movie-cinema-kiranshastry-gradient-kiranshastry-4.png"/>
    			<span class="fs-4">TRAILERS LATINO</span>
  			</a>
			  <img src="https://img.icons8.com/ios/25/FFFFFF/delete-sign--v1.png" (click)="offcanvas.dismiss('Cross click')"/>
		</div>
		<hr style="color: white;">
		<div class="offcanvas-body">
		<ul class="nav nav-pills flex-column mb-auto">
    <li class="nav-item">
      <a href="/pelicula/pagina/1" routerLinkActive="active" class="nav-link active" aria-current="page">
	  <img src="https://img.icons8.com/ios/25/FFFFFF/home--v1.png"/>
        Inicio
      </a>
    </li>
    <li>
      <a href="/pelicula/pagina/1" routerLinkActive="active" class="nav-link text-white">
	  <img src="https://img.icons8.com/small/24/FFFFFF/movies-folder.png"/>
        Peliculas
      </a>
    </li>
    <li>
      <a href="/serie/pagina/1" class="nav-link text-white">
	  <img src="https://img.icons8.com/ios-glyphs/25/FFFFFF/retro-tv.png"/>
        Series
      </a>
    </li>
    <li>
      <a href="#" class="nav-link text-white">
	  <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/25/FFFFFF/external-random-interface-kiranshastry-lineal-kiranshastry.png"/>
        Aleatorio
      </a>
    </li>
    <li>
      <a href="#" class="nav-link text-white">
        <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg>
        Aleatorio
      </a>
    </li>
  </ul>
		<hr style="color: white;">
		
		<form  class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
        <input 
        name="palabra_buscada"
        
        type="search" 
        class="form-control form-control-dark text-bg-dark" 
        placeholder="Search...">
      </form>

      <div class="text-center">
        <button type="button" class="btn btn-warning">Buscar</button>
      </div>
		<hr style="color: white;">
		</div>
  </div>
	`,
})
export class NgbdOffcanvasFirstFocus {
	constructor(readonly offcanvas: NgbActiveOffcanvas) {}
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  styles: [
    `
      li {
        
        cursor: pointer;
      }
    `]
})

export class NavbarComponent implements OnInit {

  palabra_buscada = "";

  constructor(private offcanvasService: NgbOffcanvas, private _router: Router) { }

  ngOnInit(): void {
  }

  buscar(){
    console.log(this.palabra_buscada);
    this._router.navigate(['/buscar/', this.palabra_buscada]);
  }

  openFirstFocus() {
		this.offcanvasService.open(NgbdOffcanvasFirstFocus);
	}
  
}
