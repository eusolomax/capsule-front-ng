import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ButtonDirective, ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { LabelModule } from 'primeng/label';

@Component({
  selector: 'app-login',
  imports: [CardModule, ButtonModule, InputTextModule, LabelModule],
  templateUrl: './login.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './login.css',
})
export class Login {
  readonly logoPath = '/assets/resona-logo.svg';
}
