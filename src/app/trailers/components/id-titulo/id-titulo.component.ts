import { Component, Input, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-id-titulo',
  templateUrl: './id-titulo.component.html',
  styleUrls: ['./id-titulo.component.css'],
})
export class IdTituloComponent implements OnInit {

  @Input() dato: any; 
  @Input() idTrailerYoutube: any; 
  public idvideo = "https://www.youtube.com/embed/";

  constructor(config: NgbRatingConfig) { 
    config.readonly = true;
  }

  ngOnInit(): void {
    
  }
  
}
