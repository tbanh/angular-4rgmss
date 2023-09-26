import { Injectable } from '@angular/core';
import { interval, of, switchMap, take, throwError, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // DO NOT CHANGE THIS FUNCTION
  callSaveApi(user: any) {
    const time = Math.floor((Math.random() + 1) * 10) * 100;
    return timer(time).pipe(
      take(1),
      switchMap(() => {
        if (Math.floor(Math.random() * 100) > 10) {
          return of('API succeeded');
        }
        throw new Error('API failed');
      })
    );
  }
}
