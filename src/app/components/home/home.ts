import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  result = () => { return this.n1 + this.n2 };
  n1: number = 0;
  n2: number = 0;
  @Input() context!: string
}
