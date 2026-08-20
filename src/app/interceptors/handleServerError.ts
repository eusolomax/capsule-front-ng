import { HttpInterceptorFn } from "@angular/common/http";
import { catchError, throwError } from "rxjs";
import { inject } from "@angular/core";
import { Global } from "../services/global";

export const HandleServerError: HttpInterceptorFn = (req, next) => {
  const globalService = inject(Global);

  return next(req).pipe(
    catchError(error => {
      let status: number = error.status

      // Trigger toast server error;
      if (status == 0 || status > 500) {
        globalService.notifyServerError()
      }

      return throwError(() => error);
    })
  )
};