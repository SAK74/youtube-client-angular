import { ItemType } from './item.model';

export interface RespType {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: ItemType[];
}
