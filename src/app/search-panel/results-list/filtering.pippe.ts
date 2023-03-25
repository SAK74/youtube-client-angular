import { Pipe, PipeTransform } from '@angular/core';
import { ItemType } from '../item.model';

@Pipe({ name: 'byWord' })
export class FilterByWordPipe implements PipeTransform {
  transform(value: ItemType[], word: string) {
    return value.filter((item) =>
      item.snippet.title.toLocaleLowerCase().includes(word.toLocaleLowerCase())
    );
  }
}
