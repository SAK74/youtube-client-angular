import { Pipe, PipeTransform } from '@angular/core';
import { SortType } from 'src/app/app.component';
import { ItemType } from '../item.model';

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
export class FilterByDate implements PipeTransform {
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
export class FilterByViews implements PipeTransform {
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
