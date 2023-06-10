import { createAction, props } from '@ngrx/store';
import { ItemType } from 'src/app/youtube/models/item.model';

export const addYou2BeCardAction = createAction(
  '[YOU2BE_cards] add_card',
  props<ItemType>()
);

export const resetCards = createAction('[YOU2BE_cards] reset_cards');
