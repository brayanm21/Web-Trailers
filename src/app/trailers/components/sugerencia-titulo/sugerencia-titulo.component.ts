import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-sugerencia-titulo',
  templateUrl: './sugerencia-titulo.component.html',
  styleUrls: ['./sugerencia-titulo.component.css']
})
export class SugerenciaTituloComponent implements OnInit {

  @Input() dato: any; 
  @Input() tipo: string = "";
  

  constructor(config: NgbCarouselConfig) { 
    config.showNavigationArrows = false; // ocultar flechas arreglar
    
  }


  ngOnInit(): void {
  }
}
