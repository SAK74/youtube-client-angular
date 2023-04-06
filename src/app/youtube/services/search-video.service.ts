import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchService {
  $inputObserver: Observable<string> | null = null;
  searchText = '';
}
