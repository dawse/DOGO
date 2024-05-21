import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cornee',
  templateUrl: './cornee.component.html',
  styleUrls: ['./cornee.component.css']
})
export class CorneeComponent {
  
  currentPage = 1;
  totalPages = 2;
  constructor(private router: Router) {}

  redirectToEye(): void {
    this.router.navigate(['/']);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;

    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;

    }
  }

}
