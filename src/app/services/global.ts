import { Service, signal } from '@angular/core';

@Service()
export class Global {
  readonly _serverError = signal(false);

  notifyServerError(): void {
    this._serverError.set(true);
  }

  resetNotifyServerError(): void {
    this._serverError.set(false);
  }

}