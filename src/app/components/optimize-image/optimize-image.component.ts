import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'optimize-image',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './optimize-image.component.html',
  styleUrl: './optimize-image.component.css',
})
export class OptimizeImageComponent {
  logoUrl = '/assets/angular-logo.svg';
  logoAlt = 'Angular logo';
}
