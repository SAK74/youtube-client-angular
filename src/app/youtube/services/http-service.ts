import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemType } from '../models/item.model';
import { RespType } from '../models/response.model';
import { SearchType } from '../models/search.model';

@Injectable()
export class RequestService {
  constructor(private request: HttpClient) {}
  searchList(searchWord: string) {
    return this.request.get<RespType<SearchType>>('search', {
      params: {
        type: 'video',
        q: searchWord,
        part: 'snippet',
        // key: APIKEY,
        maxResults: 10,
      },
    });
  }
  getVideo(id: string) {
    return this.request.get<RespType<ItemType>>('videos', {
      params: {
        id,
        part: 'snippet,statistics',
        // key: APIKEY,
      },
    });
  }
}
