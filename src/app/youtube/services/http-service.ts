import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemType } from '../models/item.model';
import { RespType } from '../models/response.model';
import { SearchType } from '../models/search.model';

const APIKEY = 'AIzaSyCJ5Nb9W6ec2IlV8SqjK49upIhwkBDib-s';
const URL = `https://www.googleapis.com/youtube/v3`;

@Injectable()
export class RequestService {
  constructor(private request: HttpClient) {}
  searchList(searchWord: string) {
    return this.request.get<RespType<SearchType>>(URL + '/search', {
      params: {
        type: 'video',
        q: searchWord,
        part: 'snippet',
        key: APIKEY,
        maxResults: 10,
      },
    });
  }
  getVideo(id: string) {
    return this.request.get<RespType<ItemType>>(URL + '/videos', {
      params: {
        id,
        part: 'snippet,statistics',
        key: APIKEY,
      },
    });
  }
}
