import { NewCardType } from '../admin/models';
import { ItemType } from '../youtube/models/item.model';

export interface StoreType {
  customCards: NewCardType[];
  you2BeCards: ItemType[];
}
