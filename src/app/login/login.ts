import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { form, FormField, required, schema } from '@angular/forms/signals';
import { ButtonDirective, ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { LabelModule } from 'primeng/label';

@Component({
  selector: 'app-login',
  imports: [CardModule, ButtonModule, InputTextModule, LabelModule, FormField],
  templateUrl: './login.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './login.css',
})
export class Login {
  readonly logoPath = '/assets/resona-logo.svg';
  login = signal<loginForm>({
    email: "",
    password: ""
  })

  loginForm = form(this.login, (schemaPath) => {
    required(schemaPath.email, { message: "Email is required." })
    required(schemaPath.password, { message: "Password is required." })
  })

  submit() {
  }
}
