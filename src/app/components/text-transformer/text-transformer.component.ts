import { Component } from '@angular/core';

@Component({
  selector: 'text-transformer',
  standalone: true,
  imports: [],
  templateUrl: './text-transformer.component.html',
  styleUrl: './text-transformer.component.css',
})
export class TextTransformerComponent {
  announcement = 'Hello Angular!';

  transformText(event: MouseEvent) {
    console.log(event);
    this.announcement = this.announcement.toUpperCase();
  }
}
