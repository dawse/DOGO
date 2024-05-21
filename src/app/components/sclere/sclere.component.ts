import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sclere',
  templateUrl: './sclere.component.html',
  styleUrls: ['./sclere.component.css']
})
export class SclereComponent {
  @ViewChild('topAnchor') topAnchor!: ElementRef;
  currentPage = 1;
  totalPages = 3;
  constructor(private router: Router, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Scroll to the top of the page when component initializes
    this.scrollToTop();
  }

  redirectToEye(): void {
    this.router.navigate(['/eye']);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.scrollToTop(); // Scroll to top after updating currentPage
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.scrollToTop(); // Scroll to top after updating currentPage
    }
  }

  private scrollToTop(): void {
    // Scroll to the top anchor element
    if (this.topAnchor && this.topAnchor.nativeElement) {
      this.topAnchor.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }



}
