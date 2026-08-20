import { Component, signal, ChangeDetectionStrategy, inject, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Global } from './services/global';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastModule],
  providers: [MessageService],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css',
})
export class App {
  private messageService = inject(MessageService);
  protected readonly title = signal('capsule-front');
  private readonly globalService = inject(Global);

  constructor() {
    effect(() => {
      if (this.globalService._serverError() == true) {
        this.showServerError();
        this.globalService.resetNotifyServerError();
      }
    });
  }

  showServerError() {
    this.messageService.add({ severity: 'error', summary: 'Server Error.', detail: 'Server connection failed. Please try again.' });
  }
}
