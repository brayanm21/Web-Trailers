import { Component, OnInit } from '@angular/core';
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'ngbd-offcanvas-firstfocus',
	template: `
  <div class="offcanvas offcanvas-start show text-bg-dark">
		<div class="offcanvas-header">
			<h4 class="offcanvas-title">Offcanvas title</h4>
			<button type="button" class="btn-close" aria-label="Close" (click)="offcanvas.dismiss('Cross click')"></button>
		</div>
		<div class="offcanvas-body">
			<p>One fine body&hellip;</p>
			<div class="text-end">
				<button type="button" class="btn btn-outline-dark" (click)="offcanvas.close('OK click')">OK</button>
			</div>
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

  constructor(private offcanvasService: NgbOffcanvas) { }

  ngOnInit(): void {
  }

  openFirstFocus() {
		this.offcanvasService.open(NgbdOffcanvasFirstFocus);
	}
  
}
