import { Pipe, PipeTransform } from '@angular/core';
// import { SortType } from 'src/app/services/search-sort.model';
import { ItemType } from '../models/item.model';
import { SortType } from '../services/search-sort.model';

@Pipe({ name: 'byWord' })
export class FilterByWordPipe implements PipeTransform {
  transform(value: ItemType[], word: string) {
    return !word
      ? value
      : value.filter((item) =>
          item.snippet.title
            .toLocaleLowerCase()
            .includes(word.toLocaleLowerCase())
        );
  }
}

@Pipe({ name: 'byDate' })
export class FilterByDatePipe implements PipeTransform {
  transform(value: ItemType[], dir: SortType) {
    return !dir
      ? value
      : value.sort((a, b) => {
          const exp =
            new Date(a.snippet.publishedAt).getTime() -
            new Date(b.snippet.publishedAt).getTime();
          return dir === 'dec' ? exp : -exp;
        });
  }
}

@Pipe({ name: 'byViews' })
export class FilterByViewsPipe implements PipeTransform {
  transform(value: ItemType[], dir: SortType) {
    return !dir
      ? value
      : value.sort((a, b) => {
          const exp =
            Number(a.statistics.viewCount) - Number(b.statistics.viewCount);
          return dir === 'dec' ? exp : -exp;
        });
  }
}
