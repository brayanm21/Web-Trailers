import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.css']
})
export class PaginadorComponent implements OnInit {


  @Input() dato: string =""; 

  pagina: number = 1;
  paginaMenos:number =1;
  paginaMas:number =1;
  suma:number =1;

  constructor(private activatedRoute: ActivatedRoute) {
    this.traerId();
   }

  ngOnInit(): void {
  }

  traerId(){
    this.activatedRoute.params
    .subscribe( ({id}) => {
    
    this.pagina=id;
    this.paginaMas=parseInt( id)+ this.suma ;
    this.paginaMenos=id-this.suma;
  })
  }

}
