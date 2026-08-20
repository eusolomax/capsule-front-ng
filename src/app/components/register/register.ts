import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { form, FormField, required, schema } from '@angular/forms/signals';
import { ButtonDirective, ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { LabelModule } from 'primeng/label';
import { AuthService } from '../../api/authService';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ToastModule, ButtonModule, RippleModule, CardModule, ButtonModule, InputTextModule, LabelModule, FormField],
  providers: [MessageService],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private messageService = inject(MessageService);
  readonly authService = inject(AuthService);
  readonly router = inject(Router);

  readonly logoPath = '/assets/resona-logo.svg';
  isSubmiting = signal(false);
  register = signal<registerForm>({
    name: "",
    email: "",
    password: ""
  })
  registerForm = form(this.register, (schemaPath) => {
    required(schemaPath.name, { message: "Name is required." })
    required(schemaPath.email, { message: "Email is required." })
    required(schemaPath.password, { message: "Password is required." })
  })

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Register failed', detail: 'Invalid credentials. Please try again.' });
  }

  submit() {
    this.isSubmiting.set(true);

    this.authService.postRegister(this.register()).subscribe({
      next: response => {
        this.router.navigate(['/login'])
      },
      error: error => {
        this.isSubmiting.set(false);
        if (error.status !== 0 && error.status <= 500) { this.showError() }
      }
    });
  }
}
