import { ItemType } from './item.model';

export interface RespType<T> {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: T[];
}
