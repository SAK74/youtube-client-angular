import { createAction, props } from '@ngrx/store';
import { NewCardType } from 'src/app/admin/models';

export const addCardAction = createAction(
  '[user_cards] add_card',
  props<NewCardType>()
);
