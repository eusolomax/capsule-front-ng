import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TrackItem } from "../track-item/track-item";

@Component({
  selector: 'app-home',
  imports: [FormsModule, TrackItem],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './home.css',
})
export class Home {
  result = () => {
    return this.n1 + this.n2;
  };
  n1: number = 0;
  n2: number = 0;
  @Input() context!: string;
}
