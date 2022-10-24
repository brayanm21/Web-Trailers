import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-trailer',
  templateUrl: './top-trailer.component.html',
  styleUrls: ['./top-trailer.component.css']
})
export class TopTrailerComponent implements OnInit {

  @Input() dato: any; 
  @Input() tipo: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
