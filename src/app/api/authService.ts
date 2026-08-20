import { Service } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../app/environments/environment';

interface registerResponse {
  uuid: string,
  name: string,
  email: string,
  tracks: []
}

@Service()
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/auth`;

  isAuthenticated() {
    return !!localStorage.getItem("token");
  }

  postLogin(login: loginForm) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, login);
  }

  postRegister(register: registerForm) {
    return this.http.post<registerResponse>(`${this.apiUrl}/register`, register);
  }
}
