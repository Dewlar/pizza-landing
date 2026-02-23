import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pizza } from '../interfaces/data.interface';
import { delay, Observable } from 'rxjs';

const MOCK_DATA_URL = 'db/db.json';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private readonly http = inject(HttpClient);

  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(MOCK_DATA_URL).pipe(delay(300 + Math.random() * 500));
  }
}
