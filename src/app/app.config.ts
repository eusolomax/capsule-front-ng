import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';
import { authInterceptor } from './interceptors/auth';
import { HandleServerError } from './interceptors/handleServerError';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([authInterceptor, HandleServerError])),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
      license: "eyJpZCI6ImE1MmJiOTgyLTFiZWYtNDMwMC1hODliLTgwYmE4OGEyMDRjZiIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODY5Mzk0MDQsImV4cCI6MTgxODQ3NTQwNH0.vd1pSrCMc00Zmhdn_mSIbKx96wWAnkfs76PQaqalYklfENr-LidW3-a7idHkZXqsPj129AoVemKegiDQl1sCDw"
    })
  ]
};
