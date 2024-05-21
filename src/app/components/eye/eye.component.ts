import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eye',
  templateUrl: './eye.component.html',
  styleUrls: ['./eye.component.css']
})
export class EyeComponent {

  constructor(private router: Router) { }

 /*onClick(event: any): void {
    event.target.classList.toggle('clicked');
  }*/

}
