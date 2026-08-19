import { Service } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../app/environments/environment';

@Service()
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/auth`;

  postLogin(login: loginForm) {
    console.log(login)
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, login);
  }
}
