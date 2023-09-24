import {CanMatchFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {CoreState} from "../store/core.reducer";
import {Store} from "@ngrx/store";
import {isLoggedIn} from "../store/core.selectors";
import {map} from "rxjs";

export const isLoggedInGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router);

  return inject(Store<CoreState>).select(isLoggedIn).pipe(
      map(isLoggedIn => {
        return isLoggedIn ? true : router.parseUrl('/login')
      })
  );
};
