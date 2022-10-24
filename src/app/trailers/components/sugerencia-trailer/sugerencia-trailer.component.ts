import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sugerencia-trailer',
  templateUrl: './sugerencia-trailer.component.html',
  styleUrls: ['./sugerencia-trailer.component.css']
})
export class SugerenciaTrailerComponent implements OnInit {

  @Input() dato: any; 
  @Input() tipo: string = ""; 

  constructor() { }

  ngOnInit(): void {
  }

}
