import { createReducer, on } from '@ngrx/store';
import { NewCardType } from 'src/app/admin/models';
import { addCardAction } from '../actions/custom-cards.actions';

const initialState: NewCardType[] = [];

export const customCardsReducer = createReducer(
  initialState,
  on(addCardAction, (state, { type, ...rest }) => {
    const temp = [...state];
    temp.push(rest);
    return temp;
  })
);
